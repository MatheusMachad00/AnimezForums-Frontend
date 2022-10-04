import styled from 'styled-components';

export const Head = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
/* background-color: yellow; */
margin-top: -5px;
`

export const Logo = styled.div`
display: flex;
align-items: center;
padding-top: 5px;
h1{
  color: #24FF00;
  font-family: 'Jolly Lodger', cursive;
  font-size: 35px;
  padding-top: 30px;
  margin-right: -5px;
}
img{
  width: 50px;
  height: 50px;
}
`

export const ProfileAvatar = styled.div`
img{
  width: 45px;
  height: 45px;
  border-radius: 360px;
  margin-top: 25px;
}
`

export const Bar = styled.div`
height: 2px;
background-color: #D9D9D9;
margin-top: 5px;
`