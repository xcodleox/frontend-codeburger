import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import Logo from '../../assets/logo.svg'
import RegisterImg from '../../assets/register-image.svg'
import Button from '../../components/Button'
import api from '../../services/api'
import {
  Container,
  Regimg,
  ContainerItens,
  Label,
  Input,
  SignInLnk,
  Error
} from './styles'

function Register () {
  const schema = Yup.object().shape({
    name: Yup.string().required('Seu nome é obrigatório'),
    email: Yup.string()
      .email('Digite um e-mail Válido')
      .required('O e-mail é obrigatório'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digítos'),
    confirmPassword: Yup.string()
      .required('A senha é obrigatória')
      .oneOf([Yup.ref('password')], 'As senhas devem ser iquais')

  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post('users', {
        name: clientData.name,
        email: clientData.email,
        password: clientData.password
      },
      { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('Cadastro criado com sucesso!')
      } else if (status === 409) {
        toast.error('E-mail já existe!')
      } else {
        throw new Error()
      }
    } catch (error) { toast.error('E-mail já existe!') }
  }

  return (
    <Container>
      <Regimg src={RegisterImg} alt='Register-img' />
      <ContainerItens>
        <img src={Logo} alt='logo-image' />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Nome</Label>
          <Input type='text' {...register('name')} error={errors.name?.message} />
          <Error>{errors.name?.message}</Error>

          <Label>Email</Label>
          <Input type='email' {...register('email')} error={errors.email?.message} />
          <Error>{errors.email?.message}</Error>

          <Label>Senha</Label>
          <Input type='password' {...register('password')} error={errors.password?.message} />
          <Error>{errors.password?.message}</Error>

          <Label>Confirmar Senha</Label>
          <Input type='password' {...register('confirmPassword')} error={errors.confirmPassword?.message} />
          <Error>{errors.confirmPassword?.message}</Error>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>Sign Up</Button>
        </form>
        <SignInLnk>Já possui conta ? <a>Sign In</a>
        </SignInLnk>
      </ContainerItens>
    </Container>
  )
}

export default Register
