import Link from "next/link"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Logo = () => <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
    <Link
        className={`pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 ${inter.className} mb-3 text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600`}
        href="/"
    >
        Yet Another Search App
    </Link>
</div>

export default Logo