import { Box, VStack, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      as="nav"
      bg="teal.500"
      color="white"
      p={4}
      position="fixed"
      top={0}
      left={0}
      height="100vh"
      width={{ base: "full", md: "250px" }}
      display={{ base: "none", md: "block" }}
    >
      <VStack align="start" spacing={4}>
        <Text fontSize="2xl" fontWeight="bold">Navigation</Text>
        <Link as={RouterLink} to="/" fontSize="lg">Home</Link>
        <Link as={RouterLink} to="/about" fontSize="lg">About</Link>
        <Text fontSize="xl" mt={8} fontWeight="bold">Additional Links</Text>
        <Link href="https://example.com" isExternal fontSize="lg">Example Link 1</Link>
        <Link href="https://example.com" isExternal fontSize="lg">Example Link 2</Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;