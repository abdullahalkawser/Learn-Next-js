
"use client"; // Add this to make the component a Client Component

import Link from 'next/link';
import React, { Suspense } from 'react';
import { sort } from 'fast-sort';
import { useSearchParams } from 'next/navigation'; // Use Next.js useSearchParams

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const searchParams = useSearchParams();
  const sortOrder = searchParams.get('sortOrder');

  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User[] = await res.json();

  // Sort users by name or email in ascending order based on sortOrder
  const sortedUsers = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name);
  // console.log(sortedUsers)

  return (
    <div>
      <h1>Users Data Fetching</h1>

   <Suspense fallback ={<p>loading.......</p>}>
   <Link href='/users/new' className='btn '>New Users</Link>
      <table cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>
              <Link href='/users?sortOrder=name'>Name</Link>
            </th>
            <th>
              <Link href='/users?sortOrder=email'>Email</Link>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

   </Suspense>
    </div>
  );
};

export default UserPage;
