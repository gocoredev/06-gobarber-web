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
import { Link } from 'react-router-dom'
const SignUp: React.FC = () =>{

    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data: object) => {
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

            
        } catch(e) {
            
            const errors = getValidationErros(e)
            
            formRef.current?.setErrors(errors)

            console.log(e)
        }
    }, [])

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