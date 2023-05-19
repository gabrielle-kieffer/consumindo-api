import styled from "styled-components";

export const Container = styled.div`
h1{
  margin: 3 rem 0;
}

.movie{
  display: flex;
  align-items: center
  justify-content: center;
}

img{
  width: 300px;
  border-radius: 1rem;
 }

 .details{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 4rem;
  margin-top: 4.5rem;
  max-width: 50%
 }

 button{
  border:none;
  width: 288px;
  height: 48px;
  border-radius: 1rem;
  background-color: #40E0D0;
  font-size: 20px;
  font-weight: 300;
  transition-delay: 0.1s;
  margin-top: 1rem;
  cursor:pointer;
}

button:hover{
  background-color: #20B2AA;
}

// button:active{
//   background-color:#008080;
//   }
  

span{
  line-height: 130%
  margin-bottom: 1rem;
  font-size: 110%

}

h2{
  margin: 8px 0 0;
  opacity: 0.5;
  font-size: 1rem;
}
`;



