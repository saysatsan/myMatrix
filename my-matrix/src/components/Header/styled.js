import styled from 'styled-components';

const HeaderContainer = styled.header`
background-color: #f2bfef;
padding: 20px;
z-index: 999;
text-align: center;
position: fixed;
height: 110px;
width: 100%;
display: flex;
justify-content: center;
}
`;

const HeaderTitle = styled.h1`
    font-size: 32px;
    color: #260124;
    cursor: pointer;
`;

export { HeaderContainer, HeaderTitle };
