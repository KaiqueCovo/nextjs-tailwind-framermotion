import { motion } from 'framer-motion'

import Card from '@components/Card'

function Home() {
  return (
    <div>
      <h1 className="text-4xl text-center sm:text-6xl lg-text:7xl mt-10 md:mt-24 leading-none font-extrabold tracking-light text-gray-900">
        Construa sites modernos com agilidade sem precisar sair do HTML
      </h1>

      <div className="grid w-full gap-4 grid-cols-1 md:grid-cols-3 grid-rows-3 md:grid-rows-1 mt-10 md:mt-24">
        <Card 
          href="next-js" 
          imgSrc="/img/nextjs.svg" 
          layoutID="nextjs-logo" 
        />
        <Card 
          href="tailwind-css" 
          imgSrc="/img/tailwind.svg" 
          layoutID="tailwind-logo" 
        />
        <Card 
          href="framer-motion" 
          imgSrc="/img/framermotion.svg" 
          layoutID="framermotion-logo" 
        />
      </div>
    </div>
  )
}

export default Home