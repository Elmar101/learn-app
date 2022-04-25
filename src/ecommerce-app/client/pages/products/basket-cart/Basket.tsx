import { Alert, Box, Button, Grid, Image, Text } from "@chakra-ui/react";
import { XLink } from "../../../../../x-lib/x-components/x-customLink/XLink";
import Mymodal from "../../../components/custom-input-modal/Mymodal";
import { useBasketContext } from "../../../contexts/BasketContext";

export const Basket = () => {
  const [state , , ,removeItemFromBasket] = useBasketContext();
  
  const totalSum = state.reduce((acc , objItem)=>{
      return acc + (+objItem.price.toFixed(3))
  },0)

  const openModal = (onOpen:()=> void) => {
    return onOpen;
  }

  let context: JSX.Element = <></>;
  if (state.length === 0) {
    context = (
      <Alert>
        SEBETINIZDE MEHZUL YOXDUR <span style={{ paddingRight: "20px" }}></span>
        <XLink to="/">
          <i style={{ color: "blue" }}>PRODUCT SEYFESINE KECHID </i>
        </XLink>
      </Alert>
    );
  }

  if (state.length > 0) {
    context = (
        <div className="row">
            <div className="col-10">
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            {state.map((item) => (
            <div>
                <XLink to={`/product/${item.id}`}>
                <Text> Adi : {item.title.substring(0,15)} <br/>  Qiymet: {item.price} AZN <br/><br/> </Text>
                <Image  src={item.image} alt="Basket Item" loading="lazy" style={{width: "200px" , height: "200px"}}/>
                </XLink>

                <Button mt={2} colorScheme="pink" onClick={()=> removeItemFromBasket(item.id) }> Remove from Basket </Button>
            </div>
            ))}
        </Grid>
        </div>
        <div className="col-2">
            <Box> 
                <Text textAlign="center">Umumi Summa : {totalSum} AZN</Text>
                <br/>
                <Mymodal />
            </Box>
        </div>
        </div>
    );
  }
  return <Box p={5}>{context && context}</Box>;
};
