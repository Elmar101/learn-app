import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useFormik , FormikHelpers } from 'formik';
import { useNavigate } from 'react-router-dom';
import { loginAuth } from '../../../../../api/apiCall';
import { useLogginSuccessContext, useUserSetStateContext, useUserStateContext } from '../../../contexts/AuthContext';
import { SignInSchema  } from "../validations-auth/authValidations";
interface Props {}

const Signin:React.FC<Props> = () => {
  const loggin =  useLogginSuccessContext();
  const setUser = useUserSetStateContext();
  const user = useUserStateContext();
  const navigate = useNavigate();
  const formik = useFormik<{username: string, password: string, error?: string}>({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: SignInSchema,
    onSubmit: async (values:{username: string, password: string , error?: string} , bag) => {
     await loginAuth({username: values.username, password: values.password})
           .then(response=> {
             console.log("LoginAuth: ", response)
             loggin({user:{username: response.data.username , displayName: response.data.displayName} , token: response.data.token})
             navigate("/profile");
            })
           .catch((error: {response: {data:{message: string}}}) => {
            bag.setErrors({
              error: error.response.data.message 
              }) 
           });  
    },
  });

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt="10px">
          <Box textAlign="center">
            <Heading> Sign Up </Heading>
          </Box>
          <Box my={5}>
            <Alert status='error'>
              {JSON.stringify(formik.errors)}
            </Alert>
          </Box>
          
          <Box my={5} textAlign="left">
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel> User Name </FormLabel>
                <Input 
                  name='username'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username}
                  isInvalid ={formik.touched.username && !!formik.errors.username}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel> Password </FormLabel>
                <Input 
                  name='password'
                  type="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  isInvalid = {formik.touched.password && !!formik.errors.password}
                />
              </FormControl>
              <Button type='submit' width="full"  mt={4}> Login  </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signin;