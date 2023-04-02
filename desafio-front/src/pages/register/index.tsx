import { Box, Button, Flex, Input, InputGroup, InputLeftElement, Link, Text, useTheme } from "@chakra-ui/react";
import { FiGithub, FiLock, FiUser } from 'react-icons/fi'
import { BsTelephoneFill } from "react-icons/bs"

function Register() {
  const theme = useTheme();

  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="center">
      <form onSubmit={() => { }}>
        <Box
          width="428px"
        >
          <Text
            color="gray.100"
            fontSize="xl"
            textAlign="center"
            fontFamily="heading"
            fontWeight={600}
            marginBottom="2rem">Cadastre-se!</Text>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
            >
              <FiUser color={theme.colors.gray['500']} />
            </InputLeftElement>
            <Input
              placeholder="Email"
              marginBottom="1rem"
              borderColor="gray.700"
              backgroundColor="gray.700"
              color="gray.100" />
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
              color="gray.100" />
          </InputGroup>

          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
            >
              <FiLock color={theme.colors.gray['500']} />
            </InputLeftElement>
            <Input
              placeholder="Senha"
              borderColor="gray.700"
              backgroundColor="gray.700"
              color="gray.100"
              type="password" />
          </InputGroup>

          <Flex direction="column" alignItems="center">
            <Button
              type="submit"
              marginTop="2rem"
              marginBottom="1rem"
              width="100%"
              backgroundColor="secondary.500"
              _hover={{ backgroundColor: "secondary.600" }}>Entrar</Button>
            <Link
              href="/login"
              color="gray.100">
              Já tem uma conta?<Text as="span" color="secondary.500"> fazer login</Text>
            </Link>
          </Flex>
        </Box>
      </form>
    </Flex>
  )
}

export default Register;