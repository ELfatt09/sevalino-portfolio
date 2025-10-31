import { useState } from 'react'
import { motion } from 'motion/react'
function NavLinkDesktop({children, href}) {
const [isHover, setIsHover] = useState(false)
  return (
    <motion.div
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      onClick={() => {
        setIsHover(true)
        setTimeout(() => setIsHover(false), 1000)
      }}
      className="group flex flex-col items-center space-y-1 cursor-pointer">
      <a href={href} className={` px-1 rounded-md overflow-hidden whitespace-nowrap h-7 text-lg font-sans  flex flex-col items-center justify-start`}>
        <motion.div animate={{ height: isHover ? "0%" : "100%" }} className="overflow-hidden whitespace-nowrap flex items-end justify-end">
          {children}
        </motion.div>
        <motion.div animate={{ height: isHover ? "100%" : "0%" }} className="font-semibold text-primary bg-transparent">
          {children}
        </motion.div>
      </a>
    </motion.div>
  )
}

export default NavLinkDesktop