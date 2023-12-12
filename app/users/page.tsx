import React from 'react';
import Link from 'next/link';

const UsersPage = () => {
  return (
    <div>
      <h1>Sign up as...</h1>

      <div>
      <Link href="/users/venue" className="font-bold m-4">Venue</Link>
      </div>

      <div>
        <p>
          Vendor
        </p>
      </div>
      <div></div>
        <p>
          Artist
        </p>
      <div>
        <p>
          Fan
        </p>
      </div>

      <div>
        <Link href="login">Login</Link>
      </div>

    </div>
  );
};

export default UsersPage;
