import { useRouter } from 'next/router'
import { Flex, HStack, Tag, TagLabel } from '@chakra-ui/react'
import Card from '@/components/cards'

const Deck = () => {
  const router = useRouter()
  const { did } = router.query

  return <Flex flexDir="column" p="4" alignItems="center">
    <HStack spacing={4} mb="60px">
      {['table', 'under', 'dog', 'cat', 'above', 'inside', 'house', 'car', 'on', 'is', 'are'].map((text) => (
        <Tag size="md" key={text} variant='solid' colorScheme='whiteAlpha' cursor="pointer">
          <TagLabel p="2" rounded="2">{text}</TagLabel>
        </Tag>
      ))}
    </HStack>

    <Card
      imageUrl="https://via.placeholder.com/450x450"
      sentence="The cat is on the table"
    />
  </Flex>
}

export default Deck