import { Inter } from 'next/font/google'
import Link from 'next/link'
import { stripHtmlTags } from '../utils/utils';

const inter = Inter({ subsets: ['latin'] })

const SearchResult: React.FC<{ name: string, summary: string | null, id: number }> = ({ name, summary, id }) => {
    return <Link
        href={`/show/${id}`}
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            {name}{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
        </h2>
        <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50 line-clamp-1`}
        >
            {summary ? stripHtmlTags(summary) : 'No summary available'}
        </p>
    </Link>
}

export default SearchResult