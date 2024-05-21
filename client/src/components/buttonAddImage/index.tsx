import { EButtonType } from 'domains/enums/EButtons';
import { MouseEventHandler } from 'react';
import * as S from './styles';

type TProps = {
  label?: string;
  onClick?: MouseEventHandler | undefined;
  type?: EButtonType;
};

const ButtonAddImage = ({ label, onClick, type = EButtonType.default }: TProps) => {
  return (<S.Container>
    <S.Text>{label}</S.Text>
    <S.Button onClick={onClick}>
      <S.Icon >
        <S.IconPlus />
      </S.Icon>
    </S.Button>
    </S.Container>
  );
};

export default ButtonAddImage;
