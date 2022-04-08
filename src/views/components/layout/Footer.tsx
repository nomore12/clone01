import styled from 'styled-components';

const Footer = () => {
  return (
    <ContainerStyle>
      <h1>Footer</h1>
    </ContainerStyle>
  );
};

export default Footer;

const ContainerStyle = styled.footer`
  width: 100%;
  height: 64px;
  border: 1px solid black;
  position: absolute;
  bottom: 0;
`;
