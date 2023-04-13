import { SearchResponse, ShowResponse } from '@/types';
import { useState, useEffect } from 'react';
import useSWR from 'swr';

async function fetcher<JSON = any>(
    input: RequestInfo,
    init?: RequestInit
): Promise<JSON> {
    const res = await fetch(input, init)
    return res.json()
}

const useDebounce = (value: string, delay: number) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}

export const useSearch = (query: string) => {
    const debouncedSearch = useDebounce(query, 200);
    const { data, error, isLoading } = useSWR<SearchResponse[], Error>(
        `/api/v1/search?q=${debouncedSearch}`,
        fetcher
    );

    return { data, error, isLoading };
};

export const useShow = (id: string) => {
    const { data, error, isLoading } = useSWR<ShowResponse, Error>(
        `/api/v1/show?id=${id}`,
        fetcher
    );

    return { data, error, isLoading };
};
