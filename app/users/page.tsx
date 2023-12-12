import React from 'react';
import Link from 'next/link';

const UsersPage = () => {
  return (
    <div>
      <h1>Sign in as...</h1>

      <div>
      <Link href="/">Home</Link>
      </div>

      <div>
      <Link href="/users/venue">Venue</Link>
      </div>
      
    </div>
  );
};

export default UsersPage;
