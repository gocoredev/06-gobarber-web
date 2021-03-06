import React, {useCallback, useRef} from 'react'
import * as S from './styles'
import logo from '../../assets/img/logo.svg'
import Input from '../../components/Input'
import {FormHandles} from '@unform/core'
import {Form } from '@unform/web'
import * as Yup from 'yup'

import getValidationErros from '../../utils/getVallidationErrors'
import Button from '../../components/Button'
import {FiArrowLeft, FiLock, FiMail, FiUser} from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api'
import { useToast } from '../../hooks/ToastContext'

interface SignUpFormData {
    name: string;
    email: string;
    password: string
}

const SignUp: React.FC = () =>{

    const formRef = useRef<FormHandles>(null)
    const {addToast} = useToast()
    const history = useHistory()
    const handleSubmit = useCallback(async (data: SignUpFormData) => {
        try {

            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome é Obrigatório'),
                email: Yup.string().email('Digite um e-mail valido').required('Email é obrigatório'),
                password: Yup.string().min(6, 'no mínimo 6 digitos')
            })

            await schema.validate(data, {
                abortEarly: false
            })

            await api.post('users', data);
            
            history.push('/')

            addToast({
                type: 'success',
                title: 'Cadastro Realizado',
                description: 'Bem vindo!'
            })

        } catch(e) {
            
            if (e instanceof Yup.ValidationError) {
                const errors = getValidationErros(e)
            
                formRef.current?.setErrors(errors)

                return;
            }
            
            addToast({
                type: 'error',
                title: 'Erro no cadastro',
                description: 'Ocorreu um erro ao fazer cadastro, tente novament'
            })
        }
    }, [addToast, history])

    return(
    <S.Container>
        <S.Background/>
        <S.Content>
            <S.AnimationContainer>
            <img src={logo} alt=""/>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>

                    <Input icon={FiUser} name="name" placeholder="Nome"/>

                    <Input icon={FiMail} name="email" placeholder="E-mail"/>

                    <Input icon={FiLock} name="password" placeholder="Senha" type="password"/>

                    <Button type="submit">Cadastrar</Button>

                </Form>

                <Link to="/"><FiArrowLeft /> Voltar para logon</Link>
            </S.AnimationContainer>
            
        </S.Content>
        
    </S.Container>
    )
}

export default SignUp