import Head from 'next/head'
import Feed from '../components/Feed'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Twitter-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main  
        className="bg-[#000] min-h-screen flex max-w-[1500px] mx-auto"
        >
        {/* Sidebar  */}
        <Sidebar/>

        {/* Feed  */}
        <Feed/>
        
        {/* Widgets  */}

        {/* Modal  */}
      </main>
    </div>
  )
}
