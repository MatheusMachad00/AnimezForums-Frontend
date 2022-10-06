import styled from 'styled-components';

export const SearchBar = styled.div`
display: flex;
justify-content: center;
padding: 15px 0 10px 0;
position: fixed;
width: 100vw;
background-color: black;
z-index: 99999;

input{
  width: 300px;
  height: 45px;

  background: #D9D9D9;
  border-radius: 50px;
};

input::placeholder{
  font-family: 'Inter', sans-serif;
  align-items: center;
  color: #808080;
  text-align: center;
  font-size: 15px;
};
`
export const Posts = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 30px;
width: auto;
padding: 75px 0 80px 0;

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

export const MainBody = styled.div`
position: relative;
margin-top: 70px;
`