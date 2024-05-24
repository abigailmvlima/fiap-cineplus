import { useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import * as S from './styles';

import svg from '@assets/svg';
import { ButtonGo } from '@components/buttonGo';
import { InputForm } from '@components/inputForm';
import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { EInputPosition, EInputType } from '@domain/enum/EInput';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';
import { ETheme } from '@domain/enum/ETheme';
import serviceAuth from "@service/serviceAuth";
import { IRegister } from "@domain/interfaces/register";

const ViewRegister = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      name:'',
      mail: '',
      password: '',
      passwordConf: '',
      remember: true,
    },
  });

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <S.Header>
          <svg.LogoCinePlus />
        </S.Header>
        <S.Form>
          <FormProvider {...methods}>
          <InputForm
              theme={theme}
              type={EInputType.name}
              isLowerCase={true}
              name={'name'}
              label={'Nome'}
            />
            <InputForm
              theme={theme}
              type={EInputType.mail}
              isLowerCase={true}
              name={'mail'}
              label={'Email'}
            />
            <InputForm
              theme={theme}
              type={EInputType.password}
              isLowerCase={true}
              name={'password'}
              label={'Senha'}
            />
            <InputForm
              theme={theme}
              type={EInputType.password}
              isLowerCase={true}
              name={'passwordConf'}
              label={'Configmação de senha'}
            />
          </FormProvider>
        </S.Form>
        <S.Buttons>
          <S.ButtonGo>
            <ButtonGo theme={theme} label={'Salvar'} 
                            onPress={async () => {
                              const data: IRegister = await methods.getValues();                
                              await serviceAuth.onRegister(data, route.home);
                            }}   
            />
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

export default ViewRegister;
