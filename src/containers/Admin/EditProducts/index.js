import { yupResolver } from '@hookform/resolvers/yup'
import FileUploadIcon from '@mui/icons-material/FileUpload'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import ReactSelect from 'react-select'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import { Error } from '../../../components'
import api from '../../../services/api'
import { Container, Label, Input, ButtonStyle, LabelUpload, ContainerInput } from './styles'

function EditProducts () {
  const [fileName, SetFileName] = useState(null)
  const [categories, setCategories] = useState([])
  const { push, location: { state: { product } } } = useHistory()

  const schema = Yup.object().shape({
    name: Yup.string().required('Digite o nome do produto'),
    price: Yup.string().required('Digite o preço do produto'),
    category: Yup.object().required('Escolha uma categoria'),
    offer: Yup.bool()
  })

  const { register, handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })
  const onSubmit = async data => {
    const productDataFormData = new FormData()
    productDataFormData.append('name', data.name)
    productDataFormData.append('price', data.price)
    productDataFormData.append('category_id', data.category.id)
    productDataFormData.append('file', data.file[0])
    productDataFormData.append('offer', data.offer)

    await toast.promise(api.put(`products/${product.id}`, productDataFormData), {
      pedding: 'Editando novo Produto',
      success: 'Produto editado com sucesso',
      error: 'Falha ao editar o produto'
    })

    setTimeout(() => {
      push('/listar-produtos')
    }, 1500)
  }

  useEffect(() => {
    async function loadCategories () {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (

    <Container>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div>
        <Label>Nome</Label>
        <Input type='text' {...register('name')} defaultValue={product.name}/>
        <Error>{errors.name?.message}</Error>
        </div>
        <div>
        <Label>Preço</Label>
        <Input type='number' {...register('price')} defaultValue={product.price}/>
        <Error>{errors.price?.message}</Error>
        </div>
        <div>
        <LabelUpload>
          {fileName || (
            <>
              <FileUploadIcon />
              Carregue a imagem do produto
            </>
          )}
          <input type='file' accept='image/png, image/jpeg'
            {...register('file')}
            onChange={value => SetFileName(value.target.files[0]?.name)} />
        </LabelUpload>
        <Error>{errors.file?.message}</Error>
        </div>
        <div>
        <Controller name='category' control={control} defaultValue={product.category} render={({ field }) => {
          return (
            <ReactSelect
              {...field}
              options={categories}
              getOptionLabel={cat => cat.name}
              getOptionValue={cat => cat.id}
              placeholder='Categorias'
              defaultValue={product.category}
            />
          )
        }}
        >
        </Controller>
        <Error>{errors.category?.message}</Error>
        </div>
        <ContainerInput>
        <input type='checkbox' {...register('offer')} defaultChecked={product.offer}/>
        <Label>Produto em oferta ?</Label>
        </ContainerInput>

        <ButtonStyle>Adicionar Produto</ButtonStyle>
      </form>
    </Container>
  )
}

export default EditProducts
