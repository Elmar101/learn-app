import Cart from "../../components/cart/Cart";
import { Grid } from "@chakra-ui/react";
import { useQuery, UseQueryResult } from "react-query";
import { Product } from "../../models/product";
import { fakeStoreProductsApi } from "../../../../api/fakeStoreApi";

const Products = () => {

  const { isLoading, isError, error, data }: UseQueryResult<Product[], Error> = useQuery<Product[], Error>("products", fakeStoreProductsApi);
  if (isLoading) return <div>'Loading...'</div>;

  if (isError) return <div> {"An error has occurred: " + error}</div>;
  console.log("DATA IS : ", data);
  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {data && data.map((item, key) => <Cart key={key} product={item} />)}
      </Grid>
    </div>
  );
};

export default Products;
