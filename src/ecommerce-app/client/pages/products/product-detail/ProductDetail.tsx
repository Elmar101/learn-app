import { Box, Button, Text } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { useParams } from 'react-router'
import { fetchProduct } from '../../../../../api/fakeStoreApi';
import { Product } from '../../../models/product';
import ImageGallery from 'react-image-gallery';
interface Props {

}
const ProductDetail: React.FC<Props> = () => {
  const {product_id} = useParams();
  const {isLoading , isError , error , data}: UseQueryResult<Product , Error> =  
        useQuery<Product , Error>(["product", product_id], () => fetchProduct(product_id || "") );
        
  if (isLoading) return <div>'Loading...'</div>;

  if (isError) return <div> {"An error has occurred: " + error}</div>;
  console.log("DATA IS : ", data);
  const images = [
    {
      original: data?.image || "",
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  
  //[{original: data?.image || ""}];
  return (
    <>
        <Button colorScheme="pink"> Add to basket </Button>
        <Text as="h2" fontSize="2xl"> {data?.title} </Text>
        <Text> {moment(new Date().getTime()).format("DD/MM/YYYY")} </Text>
        <p style={{textAlign: "justify"}}>{data?.description}</p>
        <Box margin="10px"><ImageGallery items={images}/></Box>
    </>
  )
}

export default ProductDetail