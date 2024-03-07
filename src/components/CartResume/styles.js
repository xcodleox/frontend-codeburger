import styled from 'styled-components'

export const Container = styled.div`
background-color: #ffffff;
padding: 15px;
border-radius: 20px;
box-shadow:0px 10px 40px rgba(0,0,0, 0.03);
display: flex;
flex-direction: column;
justify-content: space-between;




.container-top{
grid-gap: 15px 70px;
display: grid;
grid-template-areas: 
'title title'
'items items-price'
'tax tax-price'
;

.title{
    grid-area: title;
    margin-bottom: 20px;
}

.items{
    grid-area: items;
}

.items-price{
    grid-area: items-price;
}

.tax{
    grid-area: tax;
}

.tax-price{
    grid-area: tax-price;
}

}


.container-bottom{
    margin-top: 50px;
display: flex;
flex-direction: row;
justify-content: space-between;
font-size: 24px;

}


`
export const ContainerMae = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 34px;


`
