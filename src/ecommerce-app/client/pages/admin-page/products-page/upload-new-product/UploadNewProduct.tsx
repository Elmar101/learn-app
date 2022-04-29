import { Box, Button, FormControl, FormLabel, Input, Text, Textarea } from "@chakra-ui/react";
import { Formik,  FormikHelpers, FormikProps } from "formik";
import { message } from 'antd';
import React from "react";
import { useMutation, UseMutationResult,useQueryClient } from "react-query";
import { uploadNewProduct } from "../../../../../../api/fakeStoreApi";
import { Product } from "../../../../models/product";
import {validationSchema} from "./validation";
const UploadNewProduct = () => {
  const queryClient = useQueryClient()
  const uploadMutation: UseMutationResult<Product , any ,any , any>  = useMutation(uploadNewProduct,{
        onSuccess: ()=> { queryClient.refetchQueries("admin:products")}
  });
  const handleSubmit = async (values: Partial<Product> , bag: FormikHelpers<Partial<Product>>) => {
    message.loading({ content: 'Loading...', key:"product_update" });
    uploadMutation.mutate(values,{
        onSuccess: ()=> { 
            console.log(values);
            queryClient.refetchQueries("admin:products");
            message.success({content: 'the product successly upload' , key:"product_update", duration: 2})
        }
    })

  }
  return <div>
      <Text fontSize="2xl" textAlign="center"> EDIT PRODUCT </Text>
      <Formik initialValues={{
          title: "aa",
          description: "aaaaaaaaa",
          price: 60 ,
          image: "a" 
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
                                    SAVE
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

export default UploadNewProduct;







