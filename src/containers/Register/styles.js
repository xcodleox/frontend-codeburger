import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
height: 100vh;
width: 100vw;
background: url('${Background}');
display: flex;
justify-content: center;
align-items: center;
`
export const Regimg = styled.img`
height: 70%;
`
export const ContainerItens = styled.div`
background: #373737;
border-radius:0 10px 10px 0;
height: 70%;
padding: 25px 75px;
display: flex;
flex-direction: column;
justify-content: center;

h1{
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #ffffff;
    text-align: center;
    margin-top: 10px;
}
img{
    margin-top: 56px;
}

form{
    display: flex;
    flex-direction: column;
   
}

`
export const Label = styled.p`
margin: 28px 0 5px 0;

font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 14px;
color: #ffffff;
margin-bottom: 5px;
margin-top: ${props => (props.error ? '12px' : '28px')};

`
export const Input = styled.input`
width: 391.42px;
height: 38.32px;
border: none;
padding-left: 10px;
background: #ffffff;
box-shadow: 3px 3px 10px rgba(74,144,226,0.19);
border-radius: 5px;
border: ${props => (props.error ? '3px solid #cc1717;' : 'none')};
padding-left:10px;
`

export const SignInLnk = styled.p`
color: white; 
font-size: 14px;
font-weight: 300; 
font-style: normal;
line-height: 16px;


cursor: pointer;

a{
    text-decoration:underline;
}
`
export const Error = styled.p`
 color: #CC1717; 
    font-size: 14px;  
    font-weight: 400;
    font-style: normal;
    line-height: 16px;
    margin-top: 4px;
`
