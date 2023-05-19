import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 2.5rem 0 2.5rem -2rem;
  }
`;

export const MoviesList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr) );
  column-gap: 3rem;
  row-gap: 4rem;

  span{
    font-weight: bold;
    font-size: 120%;
    margin-left: -2rem;
    text-align: center;
    max-width: 15.5rem;
}

`;

export const Movie = styled.li`
display: flex;
flex-direction: column;
aling-items: center;

img{
width: 180px;
border-radius: 1rem;
margin-bottom: 2px;
}

 a{
transition; all 1.5s;
 }

 a:hover{
    opacity:0.7;
 }
 `



