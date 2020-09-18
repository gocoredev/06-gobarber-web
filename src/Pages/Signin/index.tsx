import React, {useRef, useCallback, useContext} from 'react'
import * as S from './styles'
import logo from '../../assets/img/logo.svg'
import Input from '../../components/Input'
import * as Yup from 'yup'
import Button from '../../components/Button'
import {FiLogIn, FiLock, FiMail} from 'react-icons/fi'
import {Form} from '@unform/web'
import {FormHandles} from '@unform/core'
import getValidationErros from '../../utils/getVallidationErrors'
import {AuthContext} from '../../context/AuthContext'
import { sign } from 'crypto'

interface SignInFormData {
    email: string;
    password: string
}

const SignIn: React.FC = () =>{
    const formRef = useRef<FormHandles>(null)

    const {user, signIn} = useContext(AuthContext)

    console.log(user)
    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try {

            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                email: Yup.string().email('Digite um e-mail valido').required('Email é obrigatório'),
                password: Yup.string().required('Senha Obrigatória')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            signIn({
                email: data.email,
                password: data.password
            })
            
        } catch(e) {
            
            const errors = getValidationErros(e)
            
            formRef.current?.setErrors(errors)

            console.log(e)
        }
    }, [signIn])


    return(
    <S.Container>
        <S.Content>
            <img src={logo} alt=""/>

            <Form ref={formRef} onSubmit={handleSubmit}>
                <h1>Faça seu Logon</h1>

                <Input icon={FiMail} name="email" placeholder="E-mail"/>

                <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

                <Button type="submit">Entrar</Button>

                <a href="/forget">Esqueci minha Senha</a>
            </Form>

            <a href="/create-account"><FiLogIn /> Criar Conta</a>
        </S.Content>
        <S.Background>

        </S.Background>
    </S.Container>
    )
}

export default SignIn