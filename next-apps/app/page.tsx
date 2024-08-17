import Image from 'next/image'
import Link from 'next/link'
import Addtocard from './componant/Addtocard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'

export default async function Home() {

  const session = await getServerSession(authOptions)
  return (
<div>
  <h1>Hellow {session && <span>{session.user!.name}</span>}</h1>
  {/* <a href='/users'>aaaaaaaaaaa</a> */}
  <Link href='/users'>Users</Link>
  <Addtocard></Addtocard>

</div>
  )
}
