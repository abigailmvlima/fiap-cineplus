import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import * as S from './styles';

import svg from '@assets/svg';
import { ButtonGo } from '@components/buttonGo';
import { InputForm } from '@components/inputForm';
import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { EInputPosition, EInputType, EInputSize } from '@domain/enum/EInput';

import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';
import ButtonAddImage from '@components/buttonAddImage';
import SelectComponent from '@components/selectForm';

const ViewMovieRegister = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      name: '',
      category: '',
      note: '',
      duration: '',
      sinopsis: '',
    },
  });

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <FormProvider {...methods}>
          <S.Form>
            <S.AddButton>
              <ButtonAddImage label={'Adicionar imagem'} />
            </S.AddButton>
            <InputForm
              position={EInputPosition.left}
              theme={theme}
              isLowerCase={true}
              label={'Título'}
              name={'name'}
              placeholder={''}
            />
            <S.Row>
              <SelectComponent label={'Categoria'} size={32} />              
              <InputForm
                position={EInputPosition.left}
                theme={theme}
                size={32}
                isLowerCase={true}
                label={'Nota'}
                name={'note'}
                placeholder={''}
              />
              <InputForm
                position={EInputPosition.left}
                theme={theme}
                size={32}
                isLowerCase={true}
                label={'Duracão'}
                name={'duration'}
                placeholder={''}
              />
            </S.Row>
            <InputForm
              position={EInputPosition.left}
              theme={theme}
              isLowerCase={false}
              label={'Sinopse'}
              name={'sinopsis'}
              placeholder={''}
            />
          </S.Form>
        </FormProvider>
        <S.Buttons>
          <S.ButtonGo>
            <ButtonGo theme={theme} label={'Salvar'} onPress={route.home} />
          </S.ButtonGo>
          <S.ButtonGo>
            <ButtonGo
              theme={theme}
              label={'Cancelar'}
              onPress={route.login}
              type={2}
            />
          </S.ButtonGo>
        </S.Buttons>
      </S.Contents>
    </S.Container>
  );
};

export default ViewMovieRegister;
