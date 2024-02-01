import styled from 'styled-components';

export const StyledNumbers = styled.div`
  position: relative;
  display: flex;
  width: 55%;  

  @media (max-width: 1260px) {
    width: 67%;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  & > img {
    text-align: center;
    width: 95%;
    height: auto;
  }
`;

export const StyledNumber = styled.div`
  list-style: none;
  position: absolute;  
  font-size: 34px;
  font-family: 'Playfair Display', serif;
  color: #260124;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  


  &.numberLi-0 {
    top: 45%;
    left: 2%;

    @media (max-width: 900px) {
      top: 44%;
      left: 3%;
    } 
    
    @media (max-width: 668px) {
      top: 43%;
      left: 2%;
    }
    
    @media (max-width: 545px) {
      top: 42%;
      left: 1%;
    }
  }

  &.numberLi-1 {
    top: 1%;
    left: 46.5%;

    @media (max-width: 900px) {
      top: 0%;
      left: 46%;
    }
    
    @media (max-width: 668px) {
      top: -1%;
      left: 46%;
    } 

    @media (max-width: 545px) {
      top: -3%;
      left: 45.5%;
    }
  }

  &.numberLi-2 {
    top: 45%;
    right: 8%;

    @media (max-width: 900px) {
      top: 44%;
      right: 7%;
    }

    @media (max-width: 668px) {
      top: 43%;
      right: 6%;
    }

    @media (max-width: 545px) {
      top: 41.5%;
      right: 5%;
    }
  }

  &.numberLi-3 {
    bottom: 3%;
    left: 46.5%;

    @media (max-width: 900px) {
      bottom: 2%;
      left: 46%;
    }

    @media (max-width: 545px) {
      bottom: 1%;
      left: 45.5%;
    }
  }

  &.numberLi-4 {
    top: 45%;
    left: 46.5%; 
    
    @media (max-width: 900px) {
      top: 45%;
      left: 46%;
    }

    @media (max-width: 668px) {
      top: 43%;
      left: 46%;
    }

    @media (max-width: 545px) {
      top: 41.5%;
      left: 45.5%;
    }
  }

  @media (max-width: 550px) {
    font-size: 28px;
  }
`;
