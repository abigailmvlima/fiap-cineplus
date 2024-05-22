import { ETheme } from "@domain/enum/ETheme";
import * as S from "./styles";

export interface IButtonGo {
  theme: ETheme;
  onPress?: () => void;
  label: string;
  type?:number
}
const ButtonGo = ({ theme, onPress, label,type }: IButtonGo) => {
  return (
    <S.Container themeSelected={theme} onPress={onPress && onPress} type={type}>
      <S.Title themeSelected={theme} type={type}>{label}</S.Title>
    </S.Container>
  );
};

export { ButtonGo };
