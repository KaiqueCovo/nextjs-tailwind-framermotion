import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC = ({ children }) => {
  return (
    <header className="flex justify-center py-2 items-center md:justify-between md:py-4">
      <Image 
        src="/img/logo.svg" 
        alt="Logo"
        width={150}
        height={33}
      />

      <nav className="hidden md:block space-x-8">
        <Link href="/next-js">
          <a className="tracking-wide transition duration-150 ease-in hover:text-gray-300">NextJS</a>
        </Link>
        <Link href="/tailwind-css">
          <a className="tracking-wide transition duration-150 ease-in hover:text-gray-300">Tailwind</a>
        </Link>
        <Link href="/framer-motion">
          <a className="tracking-wide transition duration-150 ease-in hover:text-gray-300">Framer Motion</a>
        </Link>
      </nav>
    </header>
  )
}

export default Header