import { destroyCookie } from "nookies";
import { ReactNode } from "react"


export interface IUserLogin {
  email: string,
  password: string
}

export interface IUserRegister {
  fullName: string,
  email: string,
  phone: string,
  password: string,

}

export interface IProviderProps {
  children: ReactNode
}

export interface IUserName {
  fullName: string
}