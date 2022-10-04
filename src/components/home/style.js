import styled from 'styled-components';

export const SearchBar = styled.div`
display: flex;
justify-content: center;
margin-top: 10px;

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
background-color: rebeccapurple;
`

export const Post = styled.div`

`