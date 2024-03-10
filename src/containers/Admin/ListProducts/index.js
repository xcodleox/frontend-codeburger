import CalcelIcon from '@mui/icons-material/Cancel'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../../constants/paths'
import api from '../../../services/api'
import FormatCurrency from '../../../utils/formatCurrency'
import { Container, Img, EditIconStyle } from './styles'

export function ListProducts () {
  const [products, setProducts] = useState()
  const { push } = useHistory()

  useEffect(() => {
    async function loadProducts () {
      const { data } = await api.get('products')

      setProducts(data)
    }

    loadProducts()
  }, [])

  function isOffer (offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon style={{ color: 'green' }}/>
    }
    return <CalcelIcon style={{ color: 'red' }}/>
  }

  function editProducts (product) {
    push(paths.EditProduct, { product })
  }

  return (
    <Container>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell >Preço</TableCell>
            <TableCell align='center'>Produto em Oferta</TableCell>
            <TableCell align='center'>Imagem do Produto</TableCell>
            <TableCell >Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((product) => (
            <TableRow
              key={product.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell align='center'>{FormatCurrency(product.price)}</TableCell>
              <TableCell align='center'>{isOffer(product.offer)}</TableCell>
              <TableCell >
                <Img src={product.url}/>
                </TableCell>
              <TableCell >
                <EditIconStyle onClick={() => editProducts(product)}/>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>

  )
}

export default ListProducts
