import styled from 'styled-components';

export const SearchBar = styled.div`
display: flex;
justify-content: center;
margin-top: 15px;

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
display: flex;
justify-content: space-between;
align-items: center;
padding: 40px 20px;

.logout{
  width: 40px;
  height: 40px;
}
`