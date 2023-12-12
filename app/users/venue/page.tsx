import React from 'react'
import Link from 'next/link';

const VenuePage = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl antialiased">Venue Page</h1>
      {/* <p>Log in</p> */}
      <div>
        <Link href="venue/accountLicensing">Business Licensing</Link>
      </div>
    </div>
  )
}

export default VenuePage;