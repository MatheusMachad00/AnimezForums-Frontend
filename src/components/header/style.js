import styled from 'styled-components';

export const Head = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 20px;
position: fixed;
width: 100vw;
top: 0;
background-color: black;
z-index: 9999999;
border-bottom: solid;
border-color: #D9D9D9;
border-width: 2px;
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
  margin-top: 15px;
}
`

export const MainBody = styled.div`
position: relative;

`