import LogoutIcon from '@mui/icons-material/Logout'
import PropTypes from 'prop-types'
import React from 'react'

import { useUser } from '../../hooks/UserContext'
import { list } from './menu-list'
import { Container, ContainerItens, ListLink } from './styles'
export function SideMenu ({ path }) {
  const { Logout } = useUser()
  return (
    <Container>
<hr></hr>
{list.map(item => (
    <ContainerItens key={item.id} isActive={path === item.link}>
        <item.icon className='icon'/>
    <ListLink to={item.link}>{item.label}</ListLink>
</ContainerItens>
))}
<hr></hr>
<ContainerItens style={{ position: 'fixed', bottom: '30px' }}>
<LogoutIcon style={{ color: '#ffffff' }}/>
<ListLink to='/login' onClick={Logout}>Sair</ListLink>
</ContainerItens>
    </Container>
  )
}

SideMenu.propTypes = {
  path: PropTypes.string
}
