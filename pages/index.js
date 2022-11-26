import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <>
    {/* Here I display the log in page that redirects me to the /drawer/Landing */}
      <div>
        <Link href={'/drawer/Landing'}>
            Sign Up
        </Link>
      </div>
    </>
  )
}

export default index