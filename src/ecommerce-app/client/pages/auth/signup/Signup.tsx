import { Alert, Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import { useFormik , FormikHelpers } from 'formik';
import { signUp } from '../../../../../api/apiCall';
import { useLogginSuccessContext } from '../../../contexts/AuthContext';
import { UserValues } from '../../../models/user';
import { SignUpSchema  } from "../validations-auth/authValidations";
interface Props {}

const Signup:React.FC<Props> = () => {
  const loggin =  useLogginSuccessContext();
  const formik = useFormik<UserValues>({
    initialValues: {
      username: '',
      displayName: '',
      password: '',
      passwordConfirm: '',
    },
    validationSchema: SignUpSchema,
    onSubmit: async (values: UserValues , bag: FormikHelpers<UserValues>) => {
     await signUp({username: values.username, displayName: values.displayName, password: values.password})
           .then(response=> {
             loggin({user:{username: values.username, displayName: values.displayName, password: values.password, isLoggin: true}});
              
            })
           .catch(error => {
            bag.setErrors({
              username: error.response.data.validationErrors.username,
              displayName: error.response.data.validationErrors.displayname,
              password: error.response.data.validationErrors.password
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

              <FormControl>
                <FormLabel> Display Name </FormLabel>
                <Input 
                  name='displayName'
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.displayName}
                  isInvalid ={formik.touched.displayName && !!formik.errors.displayName}
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

              <FormControl mt={4}>
                <FormLabel> Password Confirm </FormLabel>
                <Input 
                  name='passwordConfirm'
                  type="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.passwordConfirm}
                  isInvalid ={formik.touched && !!formik.errors.passwordConfirm}
                />
              </FormControl>

              <Button type='submit' width="full"  mt={4}> Sign Up </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  )
}

export default Signup
