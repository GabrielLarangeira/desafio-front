import api from '@/services/api';
import { useRouter } from 'next/router';
import { createContext, useContext } from 'react'
import { Box, useToast } from "@chakra-ui/react";
import { IProviderProps } from '@/types';

export interface iFormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

interface userRegisterProviderData {
  registerUser: (userData: iFormData) => void
}


export const UserContext = createContext({} as userRegisterProviderData);

export const UserProvider = ({ children }: IProviderProps) => {

  const toast = useToast()
  const router = useRouter()
  const registerUser = (userData: iFormData) => {
    api.post("/api/register", userData)
      .then((res) => {
        console.log(res.data)
        toast({
          title: 'sucess',
          variant: 'solid',
          position: 'top-right',
          isClosable: true,
          render: () => (
            <Box color={'gray.50'} p={3} bg={'green.600'} fontWeight={'bold'} borderRadius={'md'}>
              Cadastro realizador com sucesso!
            </Box>
          ),
        })
        router.push('/login');
      })
      .catch((err) => {
        toast({
          title: 'error',
          variant: 'solid',
          position: 'top-right',
          isClosable: true,
          render: () => (
            <Box color={'gray.50'} p={3} bg={'red.600'} fontWeight={'bold'} borderRadius={'md'}>
              Erro ao cadastrar!
            </Box>
          ),
        })
      })
  };

  return (
    <UserContext.Provider value={{ registerUser }}>
      {children}
    </UserContext.Provider>
  )
}

export const userRegisterAuth = () => useContext(UserContext)
