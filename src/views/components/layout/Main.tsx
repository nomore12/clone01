import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '@/views/components/layout/Header';
import Footer from '@/views/components/layout/Footer';

const Main = () => {
  return (
    <ContainerStyle>
      <Header />
      <Footer />
    </ContainerStyle>
  );
};

export default Main;

const ContainerStyle = styled.div`
  height: 100vh;
`;
