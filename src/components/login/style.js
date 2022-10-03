import styled from 'styled-components'

export const LoginScreen = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 30px;
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
}
  input{
    margin-bottom: 13px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 20px;
    width: 326px;
    height: 58px;
    font-size: 20px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    margin-bottom: 20px;
  }
  input::placeholder {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #808080;
    padding-left: 16px;
  }
button{
    width: 326px;
    height: 58px;
    background: #24FF00;
    border-radius: 20px;
    color: #FFFFFF;
    border: none;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 20.976px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}
h2{
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  color: #81FE77;
  padding-top: 25px;
}
`