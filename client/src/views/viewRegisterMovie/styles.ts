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
  background-color: #01234B;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icon = styled.div`
  display: flex;
  width: 600px;  
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const LogoCine = styled.img`
  display: flex;
  width: 80%;
`;


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1000px;
  margin: 0 50px 0 60px;
  padding: 50px 0;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const IconLogo = styled.img`
  display: flex;
  width: 55%;
`;


export const IconEcoMiles = styled.img`
  display: flex;
  width: 80%;
  margin-top: 20px;
`;

export const Base = styled.div`
  display: flex;
  margin-top: 25px;
  flex-direction: column;
`;

export const Input = styled.div`
  display: flex;
  padding-top: 15px;
`;

export const InputSmall = styled.div`
  display: flex;
  width:250px;
  margin:0  0 0 40px;
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction:row;
  margin:5px 0px;
  padding-top: 15px;
  
`;

export const Forgot = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;;
`;

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

export const Registers = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Or = styled.div`
  display: flex;
  margin: 30px 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${themes.colors.v3};
`;

export const LinkLabel = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;
