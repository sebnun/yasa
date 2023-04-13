import ErrorInfo from '@/components/ErrorInfo'
import { useShow } from '@/utils/hooks'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import ShowInfo from '@/components/ShowInfo'
import { useEffect, useState } from 'react'
import Logo from '@/components/Logo'
import { internetIsSlow } from '@/utils/utils'

export default function Show() {
  const router = useRouter()
  const showId = router.query.id as string || '1'

  const { data, error, isLoading } = useShow(showId)
  const [nodeToRender, setNodeToRender] = useState<React.ReactNode>(<Loading />)
  const [isInternetSlow, setIsInternetSlow] = useState(false)

  useEffect(() => {

    if (internetIsSlow()) {
      setIsInternetSlow(true)
    } else {
      setIsInternetSlow(false)
    }

    if (isLoading) {
      setNodeToRender(<Loading />)
    } else if (error) {
      setNodeToRender(<ErrorInfo message={error.message} />)
    } else if (data) {
      setNodeToRender(<ShowInfo name={data.name} summary={data.summary} imageUrl={data.image?.medium} />)
    }
  }, [data, error, isLoading])


  return (
    <>
      {isInternetSlow && <div className='absolute text-center w-full z-20 pt-2'><ErrorInfo message='internet is slow so your experience may be degraded' /></div>}
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            {data?.name && <span>📺 {data?.name}</span>}
          </p>
          <Logo />
        </div>
        <div className="mb-32 grid text-center pt-5">
          {nodeToRender}
        </div>
      </main>
    </>
  )
}
