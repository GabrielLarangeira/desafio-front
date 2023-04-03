import { IUserName } from '@/types';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { BsTelephoneFill } from 'react-icons/bs';
import { FiUser, FiTrash2, FiEdit } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import nookies, { destroyCookie } from 'nookies'
import router from 'next/router';

const Home = ({ fullName }: IUserName) => {
  const theme = useTheme();

  const logout = () => {
    destroyCookie(null, 'kenzie.token')
    destroyCookie(null, 'kenzie.user')
    router.push('/')

  }

  return (
    <>
      <Flex
        width="100%"
        height={'36'}
        bg={'#313144'}
        alignItems="center"
        justifyContent="space-between"
      >
        <Heading
          fontSize={'3xl'}
          alignItems="center"
          color={'whiteAlpha.800'}
          marginLeft={'10%'}
        > Bem-vindo(a) {fullName} </Heading>

        <Button
          marginRight={'10%'}
          onClick={() => logout()}
        >
          Logout
        </Button>
      </Flex>
      <Flex

        height="84.5vh"
        borderColor={'white'}
        justifyContent="flex-end"
        alignItems={'center'}
        bg={'blackAlpha.300'}
        padding={'30px'}
      >
        <Flex
          flexDirection={'column'}
          w={'100%'}
          bg={'blackAlpha.300'}
          h={"100%"}
          borderRadius={'10px'}
          padding={'30px'}
        >
          <Text
            color="gray.100"
            fontSize="xl"
            textAlign="center"
            fontFamily="heading"
            fontWeight={600}
          > Meus Contatos</ Text>
          <Flex>
            <Flex
              w={'300px'}
              height={'400px'}
              alignItems={'center'}
              flexDirection={'column'}
              color={'white'}
              gap={'25px'}
            >
              <Flex
                borderRadius={'10px'}
                padding={'10px'}
                alignItems={'center'}
                flexDirection={'column'}
              >
                <Box>

                </Box>
                <Flex

                >
                  <Button
                    bg={'none'}
                  >
                    <FiEdit color={theme.colors.gray['500']} />

                  </Button>
                  <Button
                    bg={'none'}
                  >
                    <FiTrash2 color={theme.colors.gray['500']} />

                  </Button>

                </Flex>
                <Box>
                  <Text> Nome: Dolynho</ Text>
                  <Text> Telefone: 11 958745874</Text>
                  <Text> Email: Doly@mail.com</Text>

                </ Box>
              </Flex>

            </Flex>

          </Flex>

        </ Flex>
        <Flex
          width="30%"
          alignItems={'center'}
          height={'60%'}
          margin={'20px'}
          display={'table-column'}
        >
          <Text
            color="gray.100"
            fontSize="xl"
            textAlign="center"
            fontFamily="heading"
            fontWeight={600}
            marginBottom="2rem">Adicione um contato!</Text>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
              >
                <FiUser color={theme.colors.gray['500']} />
              </InputLeftElement>
              <Input
                placeholder="Nome completo"
                marginBottom="1rem"
                borderColor="gray.700"
                backgroundColor="gray.700"
                color="gray.100"
              // {...register("fullName")}
              // onChange={(e) => setInputFullName(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
              >
                <MdEmail color={theme.colors.gray['500']} />
              </InputLeftElement>
              <Input
                placeholder="Email"
                marginBottom="1rem"
                borderColor="gray.700"
                backgroundColor="gray.700"
                color="gray.100"
              // {...register("email")}
              // onChange={(e) => setInputEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
              >
                <BsTelephoneFill color={theme.colors.gray['500']} />
              </InputLeftElement>
              <Input
                placeholder="Telefone"
                marginBottom="1rem"
                borderColor="gray.700"
                backgroundColor="gray.700"
                color="gray.100"
              // {...register("phone")}
              // onChange={(e) => setInputPhone(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <Flex direction="column" alignItems="center">
            <Button
              type="submit"
              marginTop="2rem"
              marginBottom="1rem"
              width="100%"
              backgroundColor="blue.500"
              _hover={{ backgroundColor: "blue.600" }}
            >Adicionar</Button>
          </Flex>
        </Flex>

      </Flex >
    </>

  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const cookies = nookies.get(ctx)
  if (!cookies['front.token']) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  return {
    props: { fullName: cookies['front.user'] }
  }
}

export default Home
