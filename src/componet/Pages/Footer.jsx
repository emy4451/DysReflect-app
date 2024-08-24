import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px 0;
  background-color: #111;
  color: #e0e0e0;
  text-align: center;
  border-top: 1px solid #333;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CopyText = styled.p`
  margin: 5px 0;
  font-size: 15px;
  color: #b0b0b0;
`;

const ContactLink = styled.a`
  color: #f5f5f5;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #dfdf29;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <CopyText>&copy; 2024 DysReflect. All rights reserved.</CopyText>
        <CopyText>
          Contact us: <ContactLink href="mailto:info@DysReflect.com">info@DysReflect.com</ContactLink>
        </CopyText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
