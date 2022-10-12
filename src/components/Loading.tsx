import { Flex, Heading, Spinner } from "@chakra-ui/react";

interface MyProps {
  msg: string
}
export const Loading = ({ msg }: MyProps) => {
  return (
    <Flex justifyContent={"center"} alignItems="center" direction={"column"}>
      <Heading as='h5' size='4xl' textAlign="center" marginTop={4}>
        {msg}
      </Heading>
      <Spinner
        marginTop={5}
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </Flex>
  )
}
