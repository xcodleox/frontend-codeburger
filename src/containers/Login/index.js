import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import LoginImg from '../../assets/login-img.svg'
import Logo from '../../assets/logo.svg'
import { Button, Error } from '../../components'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  Label,
  Input,
  SignInLnk
  // Error
} from './styles'

export function Login () {
  const history = useHistory()
  const { putUserData } = useUser()

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
    const { data } = await toast.promise(
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

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        history.push('/pedidos')
      } else {
        history.push('/')
      }
    }, 1000)
  }

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
        <SignInLnk>Não possui conta ? <Link style={{ color: 'white' }} to={'/cadastro'}>Sign Up</Link>
        </SignInLnk>
      </ContainerItens>
    </Container>
  )
}
