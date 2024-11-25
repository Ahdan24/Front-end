import { Box, Container, Flex, Text } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <>
    <Box bgColor="gray">
        <Container maxW="7xl">
            <Flex justify="space-between" align="center" p="2">
                <Text>Logo</Text>
                <Text display={{base:"none", md:"block"}}>profile</Text>
                <Box display={{base: "block", md:"none"}}/>
            </Flex>
        </Container>
    </Box>
    </>
  )
}

export default Navbar