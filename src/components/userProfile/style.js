import styled from 'styled-components';

export const UserData = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
/* background-color: blue; */
padding: 15px 40px;
margin-bottom: 90px;
margin-top: 30px;

h1{
  color: #FFFFFF;
  font-family: 'Inter';
  font-size: 30px;
  font-weight: 700;
}
img{
  width: 50px;
  height: 50px;
}
`

export const UserStars = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* background-color: red; */

img{
  width: 40px;
  height: 40px;
  margin-top: 10px;
}

h2{
  font-family: 'Inter';
  font-style: normal;
  font-size: 13px;
  font-weight: 700;
  color: #EBFF00;
  margin-top: 5px;
}
`

export const Buttons = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

button{
  width: 300px;
  height: 70px;
  background: #24FF00;
  border-radius: 30px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #FFFFFF;
  margin-bottom: 15px;
  border: 1px solid black;
}
`

export const Navbar = styled.div`
display: flex;
justify-content: center;
margin-top: 90px;


`