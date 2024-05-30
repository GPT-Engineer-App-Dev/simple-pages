import { Container, Text, VStack, Heading, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Index = () => {
  return (
    <Flex>
      <Sidebar />
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading>Welcome to Our Website</Heading>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
          <Button as={Link} to="/about" colorScheme="teal" size="lg">Learn More About Us</Button>
        </VStack>
        <Footer />
      </Container>
    </Flex>
  );
};

export default Index;