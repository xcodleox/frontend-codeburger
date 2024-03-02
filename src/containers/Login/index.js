import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLnk,
  Error
} from './styles'

function Login () {
  const schema = Yup.object().shape({
    email: Yup.string().email('Digite um e-mail valido').required('e-mail é obrigatório'),
    password: Yup.string().required('A senha é obrigatória').min(6, 'A senha deve ter no mínimo 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    const response = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Login Pendente!',
        success: 'Logado com sucesso!',
        error: 'Email ou Senha não existe!"'
      }
    )

    console.log(response)
  }
  console.log('example')
  return (
    <Container>
      <LoginImage src={LoginImg} alt='login-image' />
      <ContainerItens>
        <img src={Logo} alt='logo-image' />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input type='email'{...register('email')} error={errors.email?.message} />
          <Error>{errors.email?.message}</Error>

          <Label>Senha</Label>
          <Input type='password' {...register('password')} error={errors.password?.message} />
          <Error>{errors.password?.message}</Error>

          <Button type="submit" style={{
            marginTop: 75,
            marginBottom: 25
          }}
          >Sign In</Button>
        </form>
        <SignInLnk>Não possui conta ? <a>Sign Up</a>
        </SignInLnk>
      </ContainerItens>
    </Container>
  )
}

export default Login
