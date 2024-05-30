import { Box, VStack, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box
      as="nav"
      bg="teal.500"
      color="white"
      p={4}
      w={{ base: "full", md: "250px" }}
      h="100vh"
      position={{ base: "relative", md: "fixed" }}
      top={0}
      left={0}
      zIndex={1}
    >
      <VStack align="start" spacing={4}>
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold">
          Home
        </Link>
        <Link as={RouterLink} to="/about" fontSize="xl" fontWeight="bold">
          About
        </Link>
        <Text fontSize="lg" mt={8}>
          Additional Links:
        </Text>
        <Link href="https://example.com" isExternal>
          Example Link 1
        </Link>
        <Link href="https://example.com" isExternal>
          Example Link 2
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;