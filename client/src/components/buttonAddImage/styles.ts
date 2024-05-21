import { EButtonType } from 'domains/enums/EButtons';
import styled from 'styled-components';
import themes from 'themes/index';
import { ReactComponent as PlusCircle } from '../../assets/svg/plusCircle.svg';

interface IContainerProps {
  type: EButtonType;
}

export const Container = styled.div`
  display: flex; 
  justify-content: center;
  align-items: flex-start;
flex-direction:column
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3c5a92; 
  border: none;
  border-radius: 5px;
  width: 100%; 
  height: 200px; 
  cursor: pointer;
  
  &:hover {
    background-color: #2e4676; 
  }

  &:active {
    background-color: #1e3250; 
  }
`;

interface ITitleProps {
  type: EButtonType;
}

export const Icon = styled.div`
  display: flex;
  width: 600px;  
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`;

export const LogoPlus = styled.img`
  display: flex;
  width: 80%;
`;

export const Title = styled.div<ITitleProps>`
  display: flex;
  text-align: center;
  font-size: 25px;
  font-family: ${themes.fontFamily.inter};
  font-weight: 500;
  letter-spacing: 1px;
  margin: 10px;
  flex-wrap: wrap;
  line-height: 35px;
  color: ${({ type }) => (type === 3 ? '#375C87' : '#FFFFFF')};
`;

export const IconPlus = styled(PlusCircle)`
  display: flex;
  width: 72px; 
  height: 72px; 
`;

export const Text = styled.p`
  color: #ffffff; 
  font-size: 24px; 
  font-weight: bold; 
  margin: 3px; 
  text-align: center; 
`;