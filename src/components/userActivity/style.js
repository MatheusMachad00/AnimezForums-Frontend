import styled from 'styled-components'

export const UserData = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px 40px;
margin-bottom: 90px;
margin-top: 80px;
/* background-color: rebeccapurple; */

h1{
  color: #FFFFFF;
  font-family: 'Inter';
  font-size: 30px;
  font-weight: 700;
}
img{
  width: 50px;
  height: 50px;
  border-radius: 360px;
}
`

export const UserStars = styled.div`
display: flex;
flex-direction: column;
align-items: center;

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

export const Footer = styled.div`
position: fixed;
bottom: 0;
width: 100vw;
background-color: black;
display: flex;
justify-content: center;
padding: 20px 0;

img{
  height: 45px;
  width: 45px;
}
`

export const ElementsBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: yellow;
width: auto;
margin-top: -75px;
padding: 25px 0 90px 0;
`

export const MainBody = styled.div`
position: relative;
margin-top: 70px;
`