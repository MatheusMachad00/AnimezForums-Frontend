import styled from 'styled-components';

export const Forms = styled.div`
margin-top: 50px;
form{
  display: flex;
  flex-direction: column;
  align-items: center;
}

input{
  width: 350px;
  height: 55px;
  border-radius: 90px;
  background-color: #D9D9D9;
  margin-bottom: 20px;
}

input::placeholder{
  text-align: center;
  font-family: 'Inter';
  font-size: 20px;
  color: #808080;
}

.description{
  height: 400px;
  border-radius: 20px;
  margin-bottom: 60px;
}
`

export const Navbar = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 10px 35px;

img{
  height: 35px;
  width: 35px;
}
`