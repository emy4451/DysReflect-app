import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 50px 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

export const YouTubeVideoWrapper = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const MathGameWrapper = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #e0f7fa;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TypesWrapper = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #fff3e0;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const DoctorWrapper = styled.div`
  margin: 20px 0;
  padding: 20px;
  background-color: #e8f5e9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FooterWrapper = styled.div`
  margin-top: 40px;
  padding: 20px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 10px;
`;