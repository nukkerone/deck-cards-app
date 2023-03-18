import { Tag, TagLabel } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'

type Props = {
  text: string
  onDrag: (e: any) => void
  onDragEnd: (e: any, text: string) => void
  colorScheme?: string
}

function Word({ text, onDrag, onDragEnd, colorScheme = 'whiteAlpha' }: Props) {
  const [dragging, setDragging] = useState(false);

  return <motion.div
    drag
    whileDrag={{ scale: 1.2 }}
    dragMomentum={false}
    onDragEnd={(e) => { setDragging(false); onDragEnd(e, text)}}
    onDragStart={() => setDragging(true)}
    onDrag={onDrag}
    dragSnapToOrigin={true}
    style={{ pointerEvents: dragging ? 'none' : 'auto' }}
  >
  <Tag size="md" variant='solid' colorScheme={colorScheme} cursor="pointer">
    <TagLabel p="2" rounded="2">{text}</TagLabel>
  </Tag>
</motion.div>
}

export default Word;