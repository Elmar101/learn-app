import { Alert, Text } from '@chakra-ui/react'
import { XLink } from '../../../../x-lib/x-components/x-customLink/XLink'

const NotFound = () => {
  return (
    <Alert colorScheme="red">
        <p> Bele bir Seyfe Yoxdur <span style={{paddingRight: "10px"}}> </span> </p>
        <br/> <br/>
        <p><XLink to="/" style={{color: "blue"}}> Ana seyfey get </XLink></p>
    </Alert>
  )
}

export default NotFound