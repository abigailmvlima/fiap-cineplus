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
  justify-content: left;
  align-items:center;
  flex-direction:row;
  margin: 15px 0;
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
`;

export const TextSinopsis = styled.Text`
  display: flex;
  margin: 15px 10px;
  font-size: 17px;
  color: #FFF;
  text-align:justify;
`;

export const TextTitle = styled.Text`
  display: flex;
  margin: 10px;
  font-size: 45px;
  color: #FFFF;
`;


export const TextCategory = styled.Text`
  display: flex;
  margin: 10px;
  font-size: 25px;
  color: #FFFF;
`;

export const TextStar= styled.Text`
  display: flex;
  margin: 10px;
  font-size: 25px;
  color: #F9A300;
`;


export const Row = styled.View`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
`;

export const InnerRow = styled.View`
  display: flex;
  flex-direction:row;
  align-items:center;
  margin:0 10px ;
`;

export const Form = styled.View`
  display: flex;
  margin: 0 6%;
`;
