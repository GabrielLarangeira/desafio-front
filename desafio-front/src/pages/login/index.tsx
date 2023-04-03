import { Box, Button, Flex, FormControl, Input, InputGroup, InputLeftElement, Link, Text, useTheme } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FiGithub, FiLock, FiUser } from 'react-icons/fi'
import * as yup from 'yup'
import { IUserLogin } from "@/types";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { useAuth } from "@/contexts/authContexts";

function Login() {
  const theme = useTheme();

  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")

  const { login } = useAuth()

  const formschame = yup.object().shape({
    email: yup.string().email("deve ser um email válido").
      required("e-mail obrigatório"),
    password: yup.string().required("Senha é obrigatória")
  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUserLogin>({
    resolver: yupResolver(formschame)
  })

  const onFormSubmit = (formData: IUserLogin) => {
    login(formData)
  }

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
            marginBottom="2rem">Logue em sua conta</Text>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                pointerEvents='none'
              >
                <FiUser color={theme.colors.gray['500']} />
              </InputLeftElement>
              <Input
                placeholder="Email"
                type="email"
                marginBottom="1rem"
                borderColor="gray.700"
                backgroundColor="gray.700"
                color="gray.100"
                {...register("email")}
                onChange={(e) => setInputEmail(e.target.value)}
              />

            </InputGroup>
          </FormControl>
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
              type="password"
              {...register("password")}
              onChange={(e) => setInputPassword(e.target.value)}
            />
          </InputGroup>

          <Flex direction="column" alignItems="center">
            <Button
              type="submit"
              marginTop="2rem"
              marginBottom="1rem"
              width="100%"
              backgroundColor="secondary.500"
              _hover={{ backgroundColor: "secondary.600" }}
              onClick={handleSubmit(onFormSubmit)}>Entrar</Button>
            <Link
              href="/register"
              color="gray.100">
              Não tem uma conta?<Text as="span" color="secondary.500"> Registre-se</Text>
            </Link>
          </Flex>

          <Flex marginTop="2rem" alignItems="center" justifyContent="center">
            <Text
              color="secondary.500"
              textAlign="center"
              marginRight="1rem">Ou entre com</Text>
            <Button
              backgroundColor="gray.600"
              leftIcon={<FiGithub color={theme.colors.gray['100']} />}
              color={theme.colors.gray['100']}
              _hover={{ backgroundColor: "gray.700" }}
              onClick={() => { }}>Github</Button>
          </Flex>
        </Box>
      </form>
    </Flex>
  )
}

export default Login;