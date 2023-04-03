import {
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,

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
              Faça novas conexões
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
            Bem-vindo ao Faça Conexões! Nossa missão é inspirar e fortalecer a
            criação de laços valiosos entre pessoas e ideias.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Link
              href='/login'
              rounded={'full'}
              border={'8px'}
              borderColor={'blue.500'}
              bg={'blue.500'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Faça login
            </Link>
            <Link
              href='/register'
              border={'8px'}
              borderColor={'white'}
              bg={'white'}
              color={'Black'}
              rounded={'full'}>
              Crie sua conta
            </Link>
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