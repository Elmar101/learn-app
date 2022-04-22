import { Box, Image } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'
import { XLink } from '../../../../../x-lib/x-components/x-customLink/XLink'
import { Users } from '../../../models/users'

interface Props {
    user: Users
}
const UsersCard:React.FC<Props> = ({user}) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
    <XLink to={`users/${user.id}`}>
        <Image src={user.avatar_url} alt="user" style={{width: "200px" , height: "200px"}}/>

        <Box p="6">
            <Box d="flex" alignItems="baseline">
                {moment(new Date().getTime()).format("DD/MM/YYYY")}
            </Box>
            <Box mt="1" fontWeight="semibold" as='h4' lineHeight="tight">
                {user.login}
            </Box>
            <Box>
                {user.gists_url} 
            </Box>
        </Box>
    </XLink>
</Box>
  )
}

export default UsersCard