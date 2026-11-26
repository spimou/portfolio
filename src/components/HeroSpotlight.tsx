import { useRef, type PointerEvent, type ReactNode } from 'react'
import { Box, Flex } from '@chakra-ui/react'

const SPOT_RADIUS = 120
const COORDS_OFFSET = 2

interface HeroSpotlightProps {
  image: string
  children: ReactNode
}

function HeroSpotlight({ image, children }: HeroSpotlightProps) {
  const xRef = useRef<HTMLDivElement>(null)
  const yRef = useRef<HTMLDivElement>(null)

  const moveSpot = (e: PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = Math.round(e.clientX - rect.left)
    const y = Math.round(e.clientY - rect.top)
    e.currentTarget.style.setProperty('--spot-x', `${x}px`)
    e.currentTarget.style.setProperty('--spot-y', `${y}px`)
    e.currentTarget.style.setProperty('--coords-visibility', 'visible')
    if (xRef.current) xRef.current.textContent = `X : ${x}`
    if (yRef.current) yRef.current.textContent = `Y : ${y}`
  }

  const hideSpot = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.style.removeProperty('--spot-x')
    e.currentTarget.style.removeProperty('--spot-y')
    e.currentTarget.style.removeProperty('--coords-visibility')
  }

  return (
    <Flex
      position="relative"
      overflow="hidden"
      w="100%"
      minH="70vh"
      bgColor="bg.hero"
      cursor="crosshair"
      maskImage="linear-gradient(to bottom, black calc(100% - 40px), transparent)"
      onPointerMove={moveSpot}
      onPointerLeave={hideSpot}
    >
      {/* dimmed + blurred; negative inset hides the soft blur edges */}
      <Box
        aria-hidden
        position="absolute"
        inset="-8px"
        bgImage={`url("${image}")`}
        bgPos="center"
        filter="blur(3px) brightness(0.45)"
      />
      {/* original image, visible only inside the circle */}
      <Box
        aria-hidden
        position="absolute"
        inset="0"
        bgImage={`url("${image}")`}
        bgPos="center"
        maskImage={`radial-gradient(circle ${SPOT_RADIUS}px at var(--spot-x, -100px) var(--spot-y, -100px), black 95%, transparent 100%)`}
      />
      <Flex position="relative" w="100%">
        {children}
      </Flex>
      {/* mouse coordinates, relative to the hero's top-left corner */}
      <Box
        aria-hidden
        position="absolute"
        left={`calc(var(--spot-x, 0px) + ${COORDS_OFFSET}px)`}
        top={`calc(var(--spot-y, 0px) + ${COORDS_OFFSET}px)`}
        visibility="var(--coords-visibility, hidden)"
        pointerEvents="none"
        fontFamily="mono"
        fontSize="0.75rem"
        lineHeight="1.25"
        whiteSpace="nowrap"
        p="2px" 
        color="brand.background"
      > 
         <div ref={xRef} />
        <div ref={yRef} />
      </Box>
    </Flex>
  )
}

export default HeroSpotlight
