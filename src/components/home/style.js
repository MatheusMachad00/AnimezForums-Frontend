import styled from 'styled-components';

export const SearchBar = styled.div`
display: flex;
justify-content: center;
margin-top: 20px;

input{
  width: 250px;
  height: 45px;

  background: #D9D9D9;
  border-radius: 50px;
};

input::placeholder{
  font-family: 'Inter', sans-serif;
  align-items: center;
  color: #808080;
  padding-left: 70px;
  font-size: 15px;
};
`
export const Posts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 35px;
width: auto;
height: 60vh;
overflow-y: auto;
background-color: yellow;
`

export const Navbar = styled.div`
position: fixed;
bottom: 0;
background-color: black;
width: 100vw;
display: flex;
justify-content: space-between;
padding: 20px 25px;

img{
  height: 35px;
  width: 35px;
}
`

export const Bar = styled.div`
height: 2px;
background-color: #D9D9D9;
margin-top: 80px;
`

export const MainBody = styled.div`
position: relative;
margin-top: 70px;
`