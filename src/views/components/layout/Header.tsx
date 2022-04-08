import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <ContainerStyle>
      <h1>header</h1>
    </ContainerStyle>
  );
};

export default Header;

const ContainerStyle = styled.header`
  position: sticky;
  position: -webkit-sticky;
  height: 48px;
  border: 1px solid black;
  top: 3px;
`;
