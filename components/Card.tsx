import Link from 'next/link'
import { motion } from 'framer-motion'

const Card: React.FC<CardProps> = ({ href, imgSrc, layoutID }) => {
  return (
    <Link href={href}>
      <div className="relative h-20 md:h-40 bg-gray-200 rounded-x1 cursor-pointer hover:bg-gray-50 transition">
      <motion.img 
        layoutId={layoutID}
        src={imgSrc}
        className="w-full h-full"
      />
    </div>
  </Link>
  )
}

interface CardProps {
  href: string
  imgSrc: string
  layoutID: string
}
export default Card