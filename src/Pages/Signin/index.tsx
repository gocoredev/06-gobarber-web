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
import {useAuth} from '../../hooks/AuthContext'
import { sign } from 'crypto'
import { useToast } from '../../hooks/ToastContext'
import { Link, useHistory } from 'react-router-dom'

interface SignInFormData {
    email: string;
    password: string
}

const SignIn: React.FC = () =>{

    const { addToast } = useToast()
    const formRef = useRef<FormHandles>(null)

    const {user, signIn} = useAuth()

    const history = useHistory()

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

            await signIn({
                email: data.email,
                password: data.password
            })
            
        } catch(e) {

            if (e instanceof Yup.ValidationError) {
                const errors = getValidationErros(e)
            
                formRef.current?.setErrors(errors)

                return;
            }
            
            addToast({
                type: 'error',
                title: 'Erro na Autenticação',
                description: 'Ocorreu um erro ao fazer login, verifique as credenciais'
            })
        }
    }, [signIn])


    return(
    <S.Container>
        <S.Content>
            <S.AnimationContainer>
            <img src={logo} alt=""/>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Logon</h1>

                    <Input icon={FiMail} name="email" placeholder="E-mail"/>

                    <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

                    <Button type="submit">Entrar</Button>

                    <Link to="/forget">Esqueci minha Senha</Link>
                </Form>

                <Link to="/signup"><FiLogIn /> Criar Conta</Link>
            </S.AnimationContainer>
            
        </S.Content>
        <S.Background>

        </S.Background>
    </S.Container>
    )
}

export default SignIn