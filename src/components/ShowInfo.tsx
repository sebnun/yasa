import { Inter } from 'next/font/google'
import { stripHtmlTags } from '../utils/utils';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

const ShowInfo: React.FC<{ name: string, summary: string | null, imageUrl?: string }> = ({ name, summary, imageUrl }) => {
    return <div>
        <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            {name}</h2>

        {imageUrl && <Image className='mx-auto p-5' src={imageUrl} alt={name} width={210} height={295} />}
        <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
        >
            {summary ? stripHtmlTags(summary) : 'No summary available'}
        </p>
    </div>
}

export default ShowInfo