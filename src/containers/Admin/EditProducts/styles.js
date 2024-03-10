import styled from 'styled-components'

import { Button } from '../../../components'

export const Container = styled.div`
width:100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
background-image: url('https://img.freepik.com/psd-gratuitas/design-de-fundo-escuro_1297-178.jpg?w=740&t=st=1710028687~exp=1710029287~hmac=5a9b8456a9da4c9b044e6c4124006225a092507c98d0ff2d1a44299cd92544b7');

form{
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(86,86,86,1) 100%);
    border-radius: 10px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 25px;
}

`
export const Label = styled.p`
color: #ffffff;
font-size: 14px;
margin: 3px 0;

`
export const Input = styled.input`
height: 40px;
border-radius: 8px;
box-shadow: 0px 4px 14px rgba(0,0,0,0.1);
background: #ffffff;
border: none;

width: 100%;
padding-left: 10px;
min-width: 280px;
`
export const ButtonStyle = styled(Button)`
width: 100%;
margin-top: 25px;
`
export const LabelUpload = styled.label`
cursor: pointer;
display: flex;
align-items: center;
border: 1px dashed #ffffff;
border-radius: 5px;
padding: 10px;
gap: 10px;


input{
    opacity: 0;
    width: 1px;
}

`
export const ContainerInput = styled.div`
display: flex;
align-items: baseline;
gap: 10px;

input{
    width: 15px;
    height: 15px;
    cursor: pointer;
}


`
