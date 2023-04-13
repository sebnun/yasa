// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { SearchResponse } from '@/types';
import { API_BASE } from '@/utils/constants';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse[] | Error>
) {
  try {
    const response = await fetch(`${API_BASE}search/shows?q=${req.query.q}`);

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const results = (await response.json()) as SearchResponse[];
    res.status(200).json(results)
  }
  catch (error) {
    res.status(500).json(error as Error)
  }
}
