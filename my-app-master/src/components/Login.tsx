import { useState} from 'react';
import styled from "styled-components"

interface LoginProps {
    onLoggedIn:(isLoggedIn: boolean, firstName:string, lastName:string, ) => void;
}

const Login = (props: LoginProps) => {
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');


    const handleLogin = () => {
        props.onLoggedIn(true, firstName, lastName);
    }

    return(
        <LoginContainer>
            <LoginHeader>Login</LoginHeader>
            <LoginInput value={firstName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value)} placeholder='First Name' />;
            <LoginInput value={lastName} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLastName(e.target.value)} placeholder='Last Name' />;
            <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginContainer>
    )

    }


    const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    justify-content: center;
    padding: 8px;
    margin: 8px;
    height: 600px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    text-align: center;
`;

const LoginHeader = styled.h1`
    text-align: center;
    color: #394867;
`;

const LoginInput = styled.input`
    padding: 8px;
    margin: 8px auto;
    width: 200px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
`;

const LoginButton = styled.button`
    width: 200px;
    color: #394867;
    background-color: white;
    border: 2px solid #394867;
    padding: 8px;
    margin: 8px auto;
:hover {
  cursor: pointer;
  background-color: #394867;
  color: white
}
`;


export default Login;