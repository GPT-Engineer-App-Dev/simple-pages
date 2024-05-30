import { Box, Text, Heading, VStack, Flex } from '@chakra-ui/react';
import Footer from "../components/Footer.jsx";

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About Us</Heading>
      <Text fontSize="lg" mb={6}>Welcome to our website. We are dedicated to providing the best service possible.</Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Our Mission</Heading>
      <VStack spacing={5}>
        <Text>To deliver high-quality products that bring joy and satisfaction to our customers.</Text>
        <Text>To innovate and continuously improve our offerings.</Text>
        <Text>To maintain a customer-centric approach in everything we do.</Text>
      </VStack>
    </Box>
    <Footer />
  </Box>
);

export default About;