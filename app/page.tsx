import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">
          Welcome to the Next.js + TS With Tailwind CSS Starter
        </h1>
        <p>
          <Link href='/wxk' >wxk</Link>
        </p>
        <p>
          <Link href='/free' >free</Link>
        </p>
      </div>
    </section>
  )
}
