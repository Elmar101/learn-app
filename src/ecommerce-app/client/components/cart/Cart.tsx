import { Box , Image ,Button } from '@chakra-ui/react'
import { Item } from 'framer-motion/types/components/Reorder/Item'
import { XLink } from '../../../../x-lib/x-components/x-customLink/XLink'
import { Product } from '../../models/product'
import moment from "moment";
interface Props {
    product: Product
}
const Cart:React.FC<Props> = ({product}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
        <XLink to="#/">
            <Image src={product.image} alt="product" style={{width: "200px" , height: "200px"}}/>

            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    {moment(new Date().getTime()).format("DD/MM/YYYY")}
                </Box>
                <Box mt="1" fontWeight="semibold" as='h4' lineHeight="tight">
                    {product.title.slice(0,15)}
                </Box>
                <Box>
                    {product.price} Azn
                </Box>
            </Box>
        </XLink>
        <Button colorScheme="pink"> Add to basket </Button>
    </Box>
  )
}

export default Cart