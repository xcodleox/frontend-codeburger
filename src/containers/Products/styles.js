import styled from 'styled-components'

export const Container = styled.div`
background: #e5e5e5;
min-height: 100vh;
`
export const ProductImg = styled.img`
width: 100%;
`
export const Menu = styled.div`
display: flex;
justify-content: center;
gap: 50px;
margin-top: 20px;


`
export const CategoryButton = styled.button`
cursor: pointer;
background: none;
border: none;
border-bottom: ${props => props.isActiveCategory && '2px solid #975ba6'} ;
color: ${props => props.isActiveCategory ? '#975ba6' : '#9a9a9d'};
font-size: 17px;
line-height: 20px;
padding-bottom: 5px;

`
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 20px;
    padding: 40px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
