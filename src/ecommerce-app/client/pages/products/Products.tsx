import Cart from '../../components/cart/Cart'
import { Grid } from '@chakra-ui/react'
const Products = () => {
  return (
    <div>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <Cart/>
            <Cart/>
            <Cart/>
            <Cart/>
        </Grid>
    </div>
  )
}

export default Products