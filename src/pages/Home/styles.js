import styled from 'styled-components'

export const Container = styled.div`
h1{
    text-align: center;
    margin: 4rem 0;
}


img{
    width:180px;
    border-radius: 1rem;
    margin-bottom:2rem;
}



` 

export const MovieList = styled.ul`
list-style: none;
display: grid;
grid-template-collumns: repeat(auto-fit,minmax (200px, 1fr));
collumn-gap: 3rem;
row-gap: 4rem;

`

export const Movie = styled.li`
display: flex;
flex-direction: column;
align-items: center;

span{
    font-weight: bold;

}

a{
    transition: all 0.3s;
}

a:hover{
    transforme: scale(1.1)
}
`