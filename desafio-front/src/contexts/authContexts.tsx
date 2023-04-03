import api from "@/services/api";
import { IUserLogin, IProviderProps } from "../types/index"
import { setCookie } from "nookies";
import { createContext, useContext } from 'react'
import { Box, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router"

interface AuthProviderData {
  login: (userData: IUserLogin) => void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({ children }: IProviderProps) => {

  const toast = useToast()
  const router = useRouter()
  const login = (userData: IUserLogin) => {
    api.post("/api/login", userData)
      .then((response) => {
        setCookie(null, 'front.token', response.data.token, { maxAge: 60 * 30, path: '/' })
        setCookie(null, 'front.user', response.data.name, { maxAge: 60 * 30, path: '/' })
        toast({
          title: 'sucess',
          variant: 'solid',
          position: 'top-right',
          isClosable: true,
          render: () => (
            <Box color={'gray.50'} p={3} bg={'green.600'} fontWeight={'bold'} borderRadius={'md'}>
              Login realizado com sucesso !
            </Box>
          ),
        })
        router.push('/home')
      })
      .catch((err) => {
        toast({
          title: 'error',
          variant: 'solid',
          position: 'top-right',
          isClosable: true,
          render: () => (
            <Box color={'gray.50'} p={3} bg={'red.600'} fontWeight={'bold'} borderRadius={'md'}>
              Erro ao logar, verifique se o e-mail e senha estão corretos
            </Box>
          ),
        })
      })

  }

  return (
    <AuthContext.Provider value={{ login }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)