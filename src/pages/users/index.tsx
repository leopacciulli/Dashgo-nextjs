import { Table, Box, Flex, Heading, Button, Icon, Thead, Th, Tr, Td, Checkbox, Tbody, Text } from '@chakra-ui/react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import { RiAddLine } from 'react-icons/ri'
import { Pagination } from '../../components/Pagination'

export default function UsersList() {
  return (
    <Box>
      <Header/>

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>
              Criar novo
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>
                  Usuário
                </Th>
                <Th>
                  Data de cadastro
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Leonardo</Text>
                    <Text color="gray.300" fontSize="small">leo@gmail.com</Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2021</Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>    
  )
}