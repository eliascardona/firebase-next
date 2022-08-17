import React from 'react'
import Link from 'next/link'
import { Header } from '../components/utils/Header'

function success() {
  return (
    <>
        <Header />
        <div className="container pt-3">
          <h2>Thanks for your buy!</h2>
          <div className="mt-2 mb-1">
            <Link href="/videos">
              <a style={{ cursor: "pointer" }}>
                ACCESS TO THE COURSE
              </a>
            </Link>
          </div>
        </div>
    </>
  )
}

export default success