import { Box, Image, Text } from '@chakra-ui/react'

type Props = {
  imageUrl: string
  sentence: string
}

function Card({ imageUrl, sentence }: Props) {
  return (
    <Box
      bg="teal.500"
      borderRadius="md"
      boxShadow="md"
      p={4}
      w={80}
    >
      <Image
        src={imageUrl}
        alt="Card image"
        borderRadius="md"
        objectFit="cover"
        mb={4}
        w="100%"
      />
      <Text fontSize="20px" textAlign="center" fontWeight="bold" mt={4} color="whiteAlpha.800">
        { sentence }
      </Text>
    </Box>
  )
}

export default Card
