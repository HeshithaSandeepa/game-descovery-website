import { GridItem, Flex, Text, Link, Stack } from '@chakra-ui/react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <GridItem
      area="footer"
      bg={'black'}
      w={'100%'}
      color={'white'}
      py={8}
      px={4}
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify={'space-between'}
        align={'center'}
        maxW={'98%'}
        mx={'auto'}
        borderTop={'1px solid'}
        borderColor={'teal.700'}
        pt={4}
      >
        <Stack
          gap={2}
          textAlign={{ base: 'center', md: 'left' }}
          mb={{ base: 4, md: 0 }}
        >
          <Text fontSize={'sm'}>
            &copy; {new Date().getFullYear()} All Rights Reserved.
          </Text>
          <Text fontSize={'xs'} color={'gray.400'}>
            Designed by **Heshitha**
          </Text>
        </Stack>

        <Stack
          direction={'row'}
          gap={6}
          fontSize={'sm'}
          textAlign={'center'}
          mb={{ base: 4, md: 0 }}
        >
          <Link
            href={'#'}
            _hover={{ textDecoration: 'underline', color: 'teal.300' }}
          >
            Privacy Policy
          </Link>
          <Link
            href={'#'}
            _hover={{ textDecoration: 'underline', color: 'teal.300' }}
          >
            Terms of Use
          </Link>
          <Link
            href={'#'}
            _hover={{ textDecoration: 'underline', color: 'teal.300' }}
          >
            Contact
          </Link>
        </Stack>

        {/* Right Section: Social Media Icons */}
        <Flex gap={4}>
          <Link
            href="https://github.com/HeshithaSandeepa"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{ color: 'teal.300' }}
          >
            <FaGithub size="20px" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/heshitha-sandeepa-8a225b24a/"
            rel="noopener noreferrer"
            _hover={{ color: 'teal.300' }}
          >
            <FaLinkedin size="20px" />
          </Link>
          <Link
            href="#"
            rel="noopener noreferrer"
            _hover={{ color: 'teal.300' }}
          >
            <FaEnvelope size="20px" />
          </Link>
        </Flex>
      </Flex>
    </GridItem>
  );
};

export default Footer;
