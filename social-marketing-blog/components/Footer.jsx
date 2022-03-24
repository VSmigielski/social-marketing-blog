import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
      <>
        <footer className="flex h-24 w-full items-center justify-center fixed bottom-0">
            <a
            className="flex items-center justify-center gap-2"
            href="https://www.veronicasmigielski.com/"
            target="_blank"
            rel="noopener noreferrer"
            >
            Coded by{' '}
            <Image src="/transparent-logo.png" alt="Veronica Smigielski Logo" width={30} height={30} />
                Veronica Smigielski
            </a>
        </footer>
      </>
  )
}

export default Footer