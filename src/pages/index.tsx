import ErrorInfo from '@/components/ErrorInfo'
import EmptyState from '@/components/EmptyState'
import NoResults from '@/components/NoResults'
import { useSearch } from '@/utils/hooks'
import { useEffect, useState } from 'react'
import SearchResult from '@/components/SearchResult'
import Loading from '@/components/Loading'
import Logo from '@/components/Logo'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const { data, error, isLoading } = useSearch(searchQuery)
  const [nodesToRender, setNodesToRender] = useState<React.ReactNode>(<Loading />)

  useEffect(() => {
    if (!searchQuery) {
      setNodesToRender(<EmptyState />)
    } else if (error) {
      setNodesToRender(<ErrorInfo message={error.message} />)
    } else if (!isLoading && searchQuery && !data?.length) {
      setNodesToRender(<NoResults />)
    } else {
      setNodesToRender(data?.map((searchReponse) => (
        <SearchResult
          key={searchReponse.show.id}
          name={searchReponse.show.name}
          summary={searchReponse.show.summary}
          id={searchReponse.show.id}
        />
      )))
    }
  }, [data, error, isLoading, searchQuery])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <input value={searchQuery} onChange={(event) => setSearchQuery(event.currentTarget.value)} className='min-w-[50%] bg-transparent border-transparent p-3 border-b-2 border-neutral-800' type='search' placeholder='Search TV Shows' autoFocus />
        </p>
        <Logo />
      </div>
      <div className="mb-32 grid text-center pt-5">
        {nodesToRender}
      </div>
    </main>
  )
}
