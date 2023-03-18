import { Box, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type Props = {
  imageUrl: string
  sentence: string
}

function Card({ imageUrl, sentence }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
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
    </motion.div>
  )
}

export default Card
