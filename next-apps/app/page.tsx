import Image from 'next/image'
import Link from 'next/link'
import Addtocard from './componant/Addtocard'

export default function Home() {
  return (
<div>
  heloow next js
  {/* <a href='/users'>aaaaaaaaaaa</a> */}
  <Link href='/users'>Users</Link>
  <Addtocard></Addtocard>

</div>
  )
}
