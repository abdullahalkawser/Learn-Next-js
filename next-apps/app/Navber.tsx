import Link from 'next/link'
import React from 'react'

const Navber = () => {
  return (
    <div className='flex bg-red-500 justify-center gap-3 mb-3 p-5'>
        <Link href='/'>users</Link>
        <Link href='admin'>admin</Link>
        <Link href='/uploads'>upload Photo</Link>
        <Link href='/api/auth/signin'>Login</Link>
    </div>
  )
}

export default Navber