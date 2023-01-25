import { motion, useAnimation } from 'framer-motion'

import { useInView } from 'react-intersection-observer'

import { useEffect } from 'react'

export default function AnimatedWrap({ scrollVariant, children }) {
  // control
  const control = useAnimation()
  const [ref, inView] = useInView()
  // animate when in view
  useEffect(() => {
    if (inView) {
      control.start('visible')
    }
  }, [control, inView])

  return (
    <motion.div
      ref={ref}
      animate={control}
      variants={scrollVariant}
      initial='hidden'
      aria-hidden='true'
    >
      {children}
    </motion.div>
  )
}
