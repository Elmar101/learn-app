import { Button, Flex, Text } from '@chakra-ui/react'
import { Popconfirm, Table } from 'antd'
import { useMemo } from 'react'
import { useMutation, UseMutationResult, useQuery, UseQueryResult , useQueryClient } from 'react-query';
import { deleteProduct, fakeStoreProductsApi } from '../../../../../api/fakeStoreApi';
import { XLink } from '../../../../../x-lib/x-components/x-customLink/XLink';
import { Product } from '../../../models/product';

const AdminProductsPage = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, error, data: dataSource }: UseQueryResult<Product[], Error> = useQuery<Product[], Error>("admin:products", fakeStoreProductsApi);
  const deleteMutation: UseMutationResult<Product , any ,any , any>  = useMutation(deleteProduct,{
    onSuccess: ()=> { queryClient.refetchQueries("admin:products")}
  });
  const columns = useMemo(() => {
    return [
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
      },
      {
        title: 'Category',
        dataIndex: 'category',
        key: 'category'
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price'
      },
      {
        title: 'Action',
        key: 'action',
        render: (text: any, record: Product) => {
          return (
            <>
              <XLink to={`/admin/products/${record.id}`}> EDIT </XLink>
              <span style={{ padding: "0 10px" }}></span>
              <Popconfirm
                title="Are you Shure ?"
                onConfirm={() => deleteMutation.mutate(record.id,{
                  onSuccess: ()=> {
                    /* queryClient.invalidateQueries('admin:products') // yazada yazmiyada bilersen*/
                  }
                })}
                onCancel={() => console.log("Cancel")}
                okText="Yes"
                cancelText="No"
                placement='left'
              >
                <a href='#'> Delete </a>
              </Popconfirm>
            </>
          )
        }
      }
    ]
  }, [])

  if (isLoading) return <div>'Loading...'</div>;
  if (isError) return <div> {"An error has occurred: " + error}</div>;
  console.log("DATA IS : ", dataSource);
  return (
    <div>
      <Flex display="flex" justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" p={5}> Mehsullar </Text>
        <XLink to="upload_new_product"> 
          <Button> upload new product</Button> 
        </XLink>
      </Flex>
      <Table dataSource={dataSource} columns={columns} rowKey="id" />;
    </div>
  )
}

export default AdminProductsPage