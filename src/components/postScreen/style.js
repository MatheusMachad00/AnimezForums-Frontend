import styled from 'styled-components';

export const PostHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 20px 15px;

h1{
  font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
color: #FFFFFF;
padding: 0 10px;
}

img{
  height: 30px;
  width: 30px;
}
`

export const LeftSide = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
  width: 50px;
  height: 50px;
  border-radius: 360px;
  margin-bottom: 10px;
}

h2{
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 15px;
color: #FFFFFF;
}
`

export const TextPost = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 100px;

h1{
  text-align: center;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 15px;
color: #FFFFFF;
padding: 20px 15px;
height: auto;
margin-bottom: 20px;
}
`

export const CommentBody = styled.div`
width: auto;
margin: 0 10px;
`

export const Navbar = styled.div`
position: fixed;
bottom: 0;
background-color: black;
width: 100vw;
display: flex;
justify-content: space-between;
padding: 20px 25px;

`
export const MainBody = styled.div`
position: relative;
margin-top: 70px;
`