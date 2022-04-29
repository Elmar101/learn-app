import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import { Formik,  FormikHelpers, FormikProps } from "formik";
import { message } from 'antd';
import React from "react";
import { useQuery, UseQueryResult } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct, updateProduct } from "../../../../../../api/fakeStoreApi";
import { Product } from "../../../../models/product";
import {validationSchema} from "./validation";
const AdminProductDetailPage = () => {
 
  const { id:product_id } = useParams();
  const { isLoading, isError, error, data }: UseQueryResult<Product, Error> =
    useQuery<Product, Error>(["admin:product", product_id], () =>
      fetchProduct(product_id || "")
    );
  if (isLoading) return <div>'Loading...'</div>;
  if (isError) return <div> {"An error has occurred: " + error}</div>;

  const handleSubmit = async (values: Partial<Product> , bag: FormikHelpers<Partial<Product>>) => {
    message.loading({ content: 'Loading...', key:"product_update" });
    try{
        await updateProduct(data?.id.toString() || "", values);
        message.success({content: 'the product successly update' , key:"product_update", duration: 2})
    }catch(err){
        message.error({content: 'the product does not update' })
    }
  }
 
  return <div>
      <Text fontSize="2xl" textAlign="center"> EDIT PRODUCT </Text>
      <Formik initialValues={{
          title: data?.title ,
          description: data?.description,
          price: data?.price ,
          image: data?.image 
      }}
      validationSchema = {validationSchema}
      onSubmit={handleSubmit}
      >
          {
              ({handleSubmit, errors , touched, handleChange , handleBlur, values, isSubmitting,setFieldValue,setValues}: FormikProps<Product>)=>{
                  return (
                      <>
                        <Box my={5} textAlign="left">
                            <form onSubmit={handleSubmit}>
                                <FormControl>
                                    <FormLabel> Title </FormLabel>
                                    <Input
                                        title="title"
                                        type="text"
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFieldValue("title",e.target.value)}
                                        onBlur={handleBlur}
                                        value={values.title}
                                        disabled={isSubmitting}
                                        isInvalid = {touched.title && !!errors.title}
                                    />
                                    {touched.title && errors.title && <Text color="red.500"> {errors.title} </Text>}
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel> Description </FormLabel>
                                    <Textarea
                                        title="description"
                                        name="description"
                                        value={values.description}
                                        onChange={(e:React.ChangeEvent<HTMLTextAreaElement>)=> setFieldValue("description",e.target.value)}
                                        onBlur={handleBlur}
                                        disabled={isSubmitting}
                                        isInvalid = {touched.description && !!errors.description}
                                    />
                                    {touched.description && errors.description && <Text color="red.500"> {errors.description} </Text>}
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel> Price </FormLabel>
                                    <Input
                                        title="price"
                                        name="price"
                                        value={values.price}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFieldValue("price",e.target.value)}
                                        onBlur={handleBlur}
                                        disabled={isSubmitting}
                                        isInvalid = {touched.description && !!errors.description}
                                    />
                                    {touched.price && errors.price && <Text color="red.500"> {errors.price} </Text>}
                                </FormControl>

                                <FormControl mt={4}>
                                    <FormLabel> Images </FormLabel>
                                    <Input
                                        title="image"
                                        name="image"
                                        value={values.image}
                                        onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setFieldValue("image",e.target.value)}
                                        onBlur={handleBlur}
                                        disabled={isSubmitting}
                                        isInvalid = {touched.description && !!errors.description}
                                    />
                                    {touched.image && errors.image && <Text color="red.500"> {errors.image} </Text>}
                                </FormControl>
                                <Button mt={5} width="full" type="submit" isLoading={isSubmitting}>
                                    UPDATAE
                                </Button>
                            </form>
                        </Box>
                      </>
                  )
              }
          }
      </Formik>
  </div>;
};

export default AdminProductDetailPage;
