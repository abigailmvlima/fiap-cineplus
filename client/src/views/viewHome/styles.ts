import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  font-family: ${themes.fontFamily.inter};
  justify-content: center;
  flex-grow: 1;
  flex-direction: row;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 100px;
`;

export const IconLogo = styled.img`
  display: flex;
  width: 50%;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10%;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 20px;
`;

export const ButtonTitle = styled.div`
  display: flex;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #54585c;
  justify-content: center;
  align-items: center;
  margin: 15px;
`;

export const ButtonImage = styled.div`
  display: flex;
`;

export const ButtonImg = styled.img`
  display: flex;
  width: 100%;
`;

export const ButtonRules = styled.div`
  display: flex;
  margin: 0 15.5%;
  font-size: 23px;
  font-family: 'Roboto';
  font-weight: 200;
  letter-spacing: 2px;
  color: #585858;
  text-align: justify;
  line-height: 32px;
  margin-top: 10px;
  margin-bottom: 30px;
`;

export const BaseButtom = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const TitleBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10%;
  margin-bottom: 40px;
`;


export const Title = styled.div`
  display: flex;
  font-size: 38px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #212121;
  margin: 5px;
  text-align: center;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Registers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

`;