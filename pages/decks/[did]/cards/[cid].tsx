import { useRouter } from 'next/router'
import { Flex, HStack, Tag, TagLabel } from '@chakra-ui/react'
import Card from '@/components/cards'

import { motion, useDragControls } from 'framer-motion'
import Word from '@/components/words'
import { useEffect, useRef, useState } from 'react'

const Deck = () => {
  const router = useRouter()
  const { did } = router.query
  const targetRef = useRef(null);
  const [targetHover, setTargetHover] = useState(false);
  const solution = useRef('the cat is on the table');
  const [words, setWords] = useState<string[]>(['table', 'under', 'dog', 'cat', 'above', 'inside', 'house', 'car', 'on', 'is', 'are', 'the'])
  const [addedWords, setAddedWords] = useState<string[]>([]);

  function onDragListener(e: any) {
    const isHover = (targetRef as any).current.contains(e.target);
    if (isHover !== targetHover) {
      setTargetHover(isHover);
    }
  }

  function onDragEndListener(e: any, text: string) {
    const onTarget = (targetRef as any).current.contains(e.target);
    if (onTarget) {
      if (solution.current.split(' ').includes(text) && !addedWords.includes(text)) {
        setAddedWords([...addedWords, text]);
        setWords(words.filter((w) => w !== text));
      }
    }
  }

  useEffect(() => {
    //console.log('Target hover has changed ', targetHover);
  }, [targetHover]);

  return <Flex flexDir="column" p="4" alignItems="center">
    <HStack spacing={4} mb="60px">
      {words.map((text, i) => (
        <Word text={text} key={text} onDrag={onDragListener} onDragEnd={onDragEndListener} colorScheme="pink" delay={0.5 + i * 0.03} />
      ))}
    </HStack>

    <motion.div
      onPointerDown={(d) => console.log('On mouse enter', d)}
      style={{ touchAction: "none" }}
      ref={targetRef}
    >
      <Card
        imageUrl="https://via.placeholder.com/450x450"
        sentence="The cat is on the table"
      />
    </motion.div>

    <HStack spacing={4} mt="60px">
      {solution.current.split(' ').map((text) => (
        addedWords.includes(text) ? <Word text={text} key={text} onDrag={onDragListener} onDragEnd={onDragEndListener} colorScheme="teal" delay={0} size="lg" /> : null
      ))}
    </HStack>
  </Flex>
}

export default Deck