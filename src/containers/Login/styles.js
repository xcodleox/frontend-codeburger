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
export const LoginImage = styled.img`
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
    margin-top: 100px;
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

`
export const Input = styled.input`
width: 391.42px;
height: 38.32px;
border: none;
padding-left: 10px;
`
export const Button = styled.button`
width: 182.81px;
height: 36.13px;
background: #9758a6;
border-radius: 20px;
border: none;


font-style:normal;
text-align: center; 
color: #EEEEEE; 
font-size: 16px;
font-weight: 500; 
line-height:19px;
margin-top: 75px;
margin-bottom: 25px;
cursor: pointer;

&:hover {
    opacity: 0.8;
}
&:active {
    opacity: 0.6;
}

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
