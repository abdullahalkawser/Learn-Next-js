"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const UserDetails = () => {
  const router = useRouter(); // Call useRouter to get the router instance

  return (
    <div>
      UserDetails
      <button className='btn btn-primary' onClick={() => router.push('/users')}>
        Create
      </button>
    </div>
  );
};

export default UserDetails;
