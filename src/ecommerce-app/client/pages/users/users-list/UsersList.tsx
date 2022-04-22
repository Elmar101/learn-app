import { Box, Button, Flex, Grid} from '@chakra-ui/react';
import React from 'react';
import { useInfiniteQuery, UseInfiniteQueryResult, UseQueryResult } from 'react-query';
import { fetchUserFromGithupApis } from '../../../../../api/githupUsersApi';
import { Users } from '../../../models/users';
import UsersCard from '../users-card/UsersCard';

const UsersList = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery<Users[], Error, Users[], "users">('users', fetchUserFromGithupApis, {
    getNextPageParam: (lastPage, pages) => {
      const morePageExist = lastPage.length === 12;
      if(!morePageExist){ return ;}
      return lastPage.length + 1;
    },
  })
  if(status === "loading") {
    return (<div> Loading ... </div>)
  }

  if(status === "error"){
    return(<div> {error} </div>)
  }
  return (
    <div>
      <Grid templateColumns="repeat(3,1fr)" gap="4">
        {
          data?.pages.map((pages , i)=>{
            return (
              <React.Fragment key={i}>
                {
                  pages.map(( page )=>(
                    <Box width="100%" key={page.id}>
                      <UsersCard user = {page}/>
                    </Box>
                  ))
                }
              </React.Fragment>
            )
          })
        }
        
      </Grid>

      <Flex justifyContent="center">
         <Button
           isLoading = {isFetchingNextPage}
           onClick={() => fetchNextPage()}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </Button>
       </Flex>
    </div>
  )
}

export default UsersList;