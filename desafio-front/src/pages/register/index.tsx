import { Box, Button, Flex, FormControl, Input, InputGroup, InputLeftElement, Link, Text, useTheme } from "@chakra-ui/react";
import { FiGithub, FiLock, FiUser } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
import { BsTelephoneFill } from "react-icons/bs"
import * as yup from 'yup'
import { IUserRegister } from "@/types";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form";
import { userRegisterAuth } from "@/contexts/registerContexts";


function Register() {
  const theme = useTheme();

  const { registerUser } = userRegisterAuth()

  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [inputFullName, setInputFullName] = useState("")
  const [inputPhone, setInputPhone] = useState("")

  const formschame = yup.object().shape({
    fullName: yup.string()
      .required("Digite seu nome"),
    email: yup.string().
      email("deve ser um email válido").
      required("e-mail obrigatório"),
    phone: yup.string().
      required("Digite um telefone").
      min(11, "Digite um telefone válido"),
    password: yup.string().
      required("Senha é obrigatória")

  })
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IUserRegister>({
    resolver: yupResolver(formschame)
  })

  const onFormSubmit = (formData: IUserRegister) => {
    registerUser(formData)
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
            marginBottom="2rem">Cadastre-se!</Text>
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
                {...register("fullName")}
                onChange={(e) => setInputFullName(e.target.value)}
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
                {...register("email")}
                onChange={(e) => setInputEmail(e.target.value)}
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
                {...register("phone")}
                onChange={(e) => setInputPhone(e.target.value)}
              />
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
                type="password"
                {...register("password")}
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </InputGroup>
          </FormControl>

          <Flex direction="column" alignItems="center">
            <Button
              type="submit"
              marginTop="2rem"
              marginBottom="1rem"
              width="100%"
              backgroundColor="secondary.500"
              _hover={{ backgroundColor: "secondary.600" }}
              onClick={handleSubmit(onFormSubmit)}
            >Entrar</Button>
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