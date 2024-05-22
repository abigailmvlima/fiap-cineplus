import styled from 'styled-components';
import themes from 'themes/index';

export const Container = styled.div`
  display: flex;
  width: 100%;
  font-family: ${themes.fontFamily.inter};
  justify-content: center;
  flex-grow: 1;
  flex-direction: column;
  justify-content:flex-start
`;
export const MovieContainer = styled.div`
  display: flex;
  width: 100%;
  font-family: ${themes.fontFamily.inter};
  justify-content: center;
  flex-grow: 1;
  flex-direction: column;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 50px;
`;

export const Image = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width:100%;
  height:50%;
`;

export const IconEcoMiles = styled.img`
  display: flex;
  width: 100%;
  height:70%;
  justify-content:flex-start;
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
  margin: 4px 1px;
  width: 40%;
  margin: 0 3%;
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
  color: #FFFF;
  text-align: center;
`;
export const MovieTitle = styled.div`
  display: flex;
  font-size: 30px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #FFFF;
  text-align: center;
`;
export const MovieSinopsis = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #FFFF;
  text-align: left;
  margin:5px 0 0 0;
`;


export const MovieType = styled.div`
  display: flex;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 500;
  letter-spacing: 3px;
  color: #FFFF;
  text-align: center;
  margin:20px 0 0 0;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  height:80px;
  `;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
`;
export const TextRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
`;

export const StarRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items:flex-start;
  width:100px;
  margin:5px 0;
  color:#F9A300;
  font-size:25px;
  align-items:center;
`;



