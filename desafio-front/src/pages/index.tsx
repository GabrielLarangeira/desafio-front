import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  LinkBox,
  Stack,
  Text,
  useBreakpointValue,
  MagicLink,
  LinkOverlay
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: 'full',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.600',
                zIndex: -1,
              }}>
              Conecte-se
            </Text>
            <br />{' '}
            <Text color={'blue.600'} as={'span'}>
              Faça novas conecções
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            The project board is an exclusive resource for contract work. It's
            perfect for freelancers, agencies, and moonlighters.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <LinkOverlay
              href='/login'
              rounded={'full'}
              border={'4px'}
              borderColor={'blue.500'}
              bg={'blue.500'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Faça login
            </LinkOverlay>
            <LinkOverlay
              href='/register'
              border={'4px'}
              borderColor={'white'}
              bg={'white'}
              color={'Black'}
              rounded={'full'}>
              Crie sua conta
            </LinkOverlay>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}