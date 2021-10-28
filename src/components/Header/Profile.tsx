import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex
      align="center"
    >
      <Box mr="4" textAlign="right">
        <Text>Leonardo Pacciulli</Text>
        <Text color="gray.300" fontSize="small">leo@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Leonardo" src="https://github.com/leopacciulli.png" />
    </Flex>
  )
}