import { ITheme } from "@domain/interfaces/ITheme";
import themes from "@themes/themes";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView<ITheme>`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${(p) => themes[p.themeSelected].colors.v1};
`;

export const Contents = styled.View`
  display: flex;
  margin: 0 4%;
`;

export const Footer = styled.View`
  display: flex;
`;

export const Header = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
  & > :nth-child(1) {
    width: 120px;
    height: 120px;
  }
`;

export const AddButton = styled.View`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const Buttons = styled.View`
  display: flex;
  flex-direction: column;
  margin: 5px 5%;
  align-items: center;
`;

export const ButtonGo = styled.View`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 20px;
`;

export const TextOr = styled.Text<ITheme>`
  display: flex;
  margin: 55px 0;
  font-size: 17px;
  color: ${(p) => themes[p.themeSelected].colors.v9};
`;

export const ButtomRegister = styled.View`
  display: flex;
`;
export const Row = styled.View`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  margin-top:10px;  
`;

export const Form = styled.View`
  display: flex;
  margin: 0 6%;  
`;
