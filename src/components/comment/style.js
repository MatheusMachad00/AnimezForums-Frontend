import styled from 'styled-components';

export const CommentBody = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: #A6A6A6;
height: auto;
padding: 7px 7px;
border-radius: 18px;
margin-bottom: 10px;
width: 350px;
`
export const Text = styled.div`
height: auto;
padding: 15px 15px;

h1{
  font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 15px;
color: #000000;
word-wrap: break-word;
width: 250px;
}
`

export const LeftSide = styled.div`
display: flex;
flex-direction: column;
align-items: center;


img{
  width: 35px;
  height: 35px;
}
.avatar{
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  border-radius: 360px;
}
h2{
  font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #FFFFFF;
margin-bottom: 50px;
}
` 