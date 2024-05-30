import { Box, Text, Link, HStack, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="teal.500" color="white" py={4} mt={16} w="100%" position="fixed" bottom={0} px={8}>
      <VStack spacing={4}>
        <Text>Contact us at: contact@example.com</Text>
        <HStack spacing={4}>
          <Link href="https://facebook.com" isExternal>
            <FaFacebook size="24px" />
          </Link>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://instagram.com" isExternal>
            <FaInstagram size="24px" />
          </Link>
        </HStack>
        <Text>© 2023 Your Company. All rights reserved.</Text>
      </VStack>
    </Box>
  );
};

export default Footer;