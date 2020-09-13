import React from 'react'
import * as S from './styles'
import logo from '../../assets/img/logo.svg'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {FiLogIn, FiLock, FiMail} from 'react-icons/fi'
const SignIn: React.FC = () =>{
    return(
    <S.Container>
        <S.Content>
            <img src={logo} alt=""/>

            <form >
                <h1>Faça seu Logon</h1>

                <Input icon={FiMail} name="email" placeholder="E-mail"/>

                <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

                <Button type="submit">Entrar</Button>

                <a href="/forget">Esqueci minha Senha</a>
            </form>

            <a href="/create-account"><FiLogIn /> Criar Conta</a>
        </S.Content>
        <S.Background>

        </S.Background>
    </S.Container>
    )
}

export default SignIn