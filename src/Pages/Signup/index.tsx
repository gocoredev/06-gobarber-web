import React from 'react'
import * as S from './styles'
import logo from '../../assets/img/logo.svg'
import Input from '../../components/Input'
import {Form } from '@unform/web'
import Button from '../../components/Button'
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi'
const Signup: React.FC = () =>{

    function handleSubmit (data: object):void {
        console.log(data)
    }

    return(
    <S.Container>
        <S.Background/>
        <S.Content>
            <img src={logo} alt=""/>

            <Form initialData={{email: 'Guilherme@gmail.com'}} onSubmit={handleSubmit}>
                <h1>Faça seu Cadastro</h1>

                <Input icon={FiUser} name="name" placeholder="Nome"/>

                <Input icon={FiMail} name="email" placeholder="E-mail"/>

                <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

                <Button type="submit">Cadastrar</Button>

            </Form>

            <a href="/create-account"><FiArrowLeft /> Voltar para logon</a>
        </S.Content>
        
    </S.Container>
    )
}

export default Signup