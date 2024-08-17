'use client'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navber = () => {
  const {status,data: sesion} = useSession()
  
  return (
    <div className='flex bg-red-500 justify-center gap-3 mb-3 p-5'>
        <Link href='/'>users</Link>
        <Link href='admin'>admin</Link>
        <Link href='/uploads'>upload Photo</Link>

        {status === 'loading' && <div> loading...</div> }
        {status === 'authenticated' && <div> {sesion.user!.name}</div> }
        {status === 'unauthenticated' &&  <Link href='/api/auth/signin'>Login</Link> }
       
    </div>
  )
}

export default Navber