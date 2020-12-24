import Link from 'next/link'
import { motion } from 'framer-motion'

const FramermotionPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <motion.img 
        layoutId="framermotion-logo"
        src="img/framermotion.svg"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link href="/">
          <a className="bg-gray-900 text-gray-50 px-6 py-3 text-lg font-semibold rounded-xl hover:bg-gray-700">
            Voltar para Home
          </a>
        </Link>
      </motion.div>
    </div>
  )
}

export default FramermotionPage