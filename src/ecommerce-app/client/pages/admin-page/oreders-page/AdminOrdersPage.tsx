import { Table, TableCaption, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { useEffect, useState } from 'react'
import { fetchOrders } from '../../../../../api/apiCall';
import { Orders } from '../../../models/orders';

const AdminOrdersPage = () => {
  const [state , setState] = useState<Orders[]>([]);
  useEffect(()=>{
    fetchOrders().then(response => setState(prevState => [...prevState , ...response]));
  },[]);
  console.log("Admin Orders: ", state);
  
  return (
    <div>
      <Text p={5} fontSize="2xl"> Orders </Text>
      <Table variant="simple">
        <TableCaption> Hello </TableCaption>
        <Thead>
          <Tr>
            <Th> Sifarisci  </Th>
            <Th> Unvan </Th>
            <Th isNumeric> Mehsulun Sayi</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            state.map((item , i)=>(
              <Tr key={i}>
                <Td> {item.user} </Td>
                <Td> {item.adress} </Td>
                <Td isNumeric> {item.quantity} </Td>
              </Tr>
            ))
          }
        </Tbody>
      </Table>
    </div>
  )
}

export default AdminOrdersPage