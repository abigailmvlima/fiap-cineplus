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
  flex-direction: column;
  width: 100%;
`;

export const Base = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
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
  position: relative;
  

  &:hover {
    background-color: #2e4676;
  }

  &:active {
    background-color: #1e3250;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 30%;
  left: 45%;
  z-index: 10;
`;

export const IconPlus = styled(PlusCircle)`
  width: 72px;
  height: 72px;
`;

export const Text = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;  
  text-align: center;
  margin-bottom: 8px;
`;

export const ImageBackground = styled.div`
  position: absolute;
  background-color: aliceblue;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  z-index: 1;
`;
