import Head from 'next/head'
import Image from 'next/image'
import Header_Main from '../components/Header_Main/Header_Main'
import Sidebar from "../components/Sidebar/Sidebar"
import Main from "../components/Main/Main"
import Login from "./login"
import { getSession } from 'next-auth/react'

function Home({session}) {
  if (!session) return <Login />;
  console.log(session)
  return (
    <div className="">
      <Head>
        <title>Google Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header_Main />
      <hr />
      <div className='flex max-w-full max-h-full mt-4'>
        <div className='!min-w-[16rem] !max-w-xs mr-2'>
          <Sidebar/>
        </div>
        <div className=''>
          <Main />
        </div>
      </div>
      
      
    </div>
  )
}

export default Home


export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}





