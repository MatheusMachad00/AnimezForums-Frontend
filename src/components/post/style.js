import styled from 'styled-components';

export const Post = styled.div`
display: flex;
background-color: #A6A6A6;
width: auto;
border-radius: 18px;
padding: 7px 7px;
margin-bottom: 10px;
`

export const LeftSide = styled.div`
img{
  width: 35px;
  height: 35px;
};
`

export const MiddleElements = styled.div`
padding: 0 20px;
h1{
  color: #000000;
  font-family: 'Inter';
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
};

h2{
  color: #000000;
  font-family: 'Inter';
  font-size: 15px;
};

img{
  margin-top: 40px;
  width: 30px;
  height: 30px;
};
`
export const RightSide = styled.div`
img{
  width: 30px;
  height: 30px;
}
`