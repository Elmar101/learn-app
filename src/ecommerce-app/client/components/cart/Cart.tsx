import { Box , Image ,Button } from '@chakra-ui/react'
import { XLink } from '../../../../x-lib/x-components/x-customLink/XLink'

const Cart = () => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <XLink to="#/">
            <Image src="https://picsum.photos/seed/picsum/400/200" alt="product"/>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    07/04/2022
                </Box>
                <Box mt="1" fontWeight="semibold" as='h4' lineHeight="tight">
                    Mackbook Pro
                </Box>
                <Box>
                    100 Azn
                </Box>
            </Box>
        </XLink>
        <Button colorScheme="pink"> Add to basket </Button>
    </Box>
  )
}

export default Cart