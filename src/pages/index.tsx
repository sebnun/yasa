import ErrorInfo from '@/components/ErrorInfo'
import EmptyState from '@/components/EmptyState'
import NoResults from '@/components/NoResults'
import { useSearch } from '@/utils/hooks'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import SearchResult from '@/components/SearchResult'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, error, isLoading } = useSearch(searchQuery)

  console.log(data, error, isLoading)

  let nodesToRender = null
  if (!searchQuery) {
    nodesToRender = <EmptyState />
  } else if (error) {
    nodesToRender = <ErrorInfo message={error.message} />
  } else if (!isLoading && searchQuery && !data?.length) {
    nodesToRender = <NoResults />
  } else {
    nodesToRender = data?.map((searchReponse) => (
      <SearchResult
        key={searchReponse.show.id}
        name={searchReponse.show.name}
        summary={searchReponse.show.summary}
        id={searchReponse.show.id}
      />
    ))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <input value={searchQuery} onChange={(event) => setSearchQuery(event.currentTarget.value)} className='min-w-[50%] bg-transparent border-transparent p-3 border-b-2 border-neutral-800' type='search' placeholder='Search TV Shows' autoFocus />

        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Link
            className={`pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 ${inter.className} mb-3 text-2xl font-semibold`}
            href="/"
          >
            Yet Another Search App
          </Link>
        </div>
      </div>


      <div className="mb-32 grid text-center pt-5">
        {nodesToRender}
      </div>
    </main>
  )
}
