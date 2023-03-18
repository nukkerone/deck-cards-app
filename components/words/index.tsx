import { Tag, TagLabel } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  text: string
  onDrag: (e: any) => void
  onDragEnd: (e: any, text: string) => void
  colorScheme?: string
  delay?: number
  size?: string
}

function Word({ text, onDrag, onDragEnd, colorScheme = 'whiteAlpha', delay = 0.5, size = 'md' }: Props) {
  const [dragging, setDragging] = useState(false);

  return <motion.div
    drag
    whileDrag={{ scale: 1.2 }}
    dragMomentum={false}
    onDragEnd={(e) => { setDragging(false); onDragEnd(e, text) }}
    onDragStart={() => setDragging(true)}
    onDrag={onDrag}
    dragSnapToOrigin={true}
    style={{ pointerEvents: dragging ? 'none' : 'auto' }}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.8,
      delay: delay,
      ease: [0, 0.71, 0.2, 1.01]
    }}
  >
    <Tag size={size} variant='solid' colorScheme={colorScheme} cursor="pointer">
      <TagLabel p="2" rounded="2">{text}</TagLabel>
    </Tag>
  </motion.div>
}

export default Word;