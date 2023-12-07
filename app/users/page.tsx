import React from 'react';
import Link from 'next/link';

const UsersPage = () => {
  return (
    <div>
      <h1>Sign in as...</h1>


      <Link href="/">Home</Link>
      <Link href="/users/venue">Venue</Link>
      
    </div>
  );
};

export default UsersPage;
