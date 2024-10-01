import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <>
    <ul className="flex flex-col justify-center items-center mt-96">
        <Link href="https://google.com"><li>Google</li></Link>
        <Link href="https://youtube.com"><li>YouTube</li></Link>
        <Link href="https://facebook.com"><li>Facebook</li></Link>
    </ul>
    </>
  )
}

export default Footer