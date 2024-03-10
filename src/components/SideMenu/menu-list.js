import AddBoxIcon from '@mui/icons-material/AddBox'
// import EditIcon from '@mui/icons-material/Edit'
import ListAltIcon from '@mui/icons-material/ListAlt'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

import paths from '../../constants/paths'

export const list = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: ShoppingBagIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ListAltIcon
  },
  /* {
    id: 3,
    label: 'Editar Produto',
    link: paths.EditProduct,
    icon: EditIcon
  }, */
  {
    id: 4,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddBoxIcon
  }

]
