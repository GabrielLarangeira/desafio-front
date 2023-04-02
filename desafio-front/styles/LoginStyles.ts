import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageSection = styled.div`
  flex: 1;
  background-image: url("/path/to/your/image.jpg");
  background-size: cover;
  background-position: center;
`;

export const LoginFormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 300px;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #0070f3;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0051a3;
  }
`;

export const SignupButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: transparent;
  color: #0070f3;
  font-size: 16px;
  border: none;
  cursor: pointer;
  &:hover {
    color: #0051a3;
  }
`;