import { NavigateFunction, useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import LinkLabel from 'components/linkLabel';
import { EInputPosition, EInputType } from 'domains/enums/EInput';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';

import serviceAuth from 'services/serviceAuth';
import { IRegister } from 'domains/interfaces/register';

const ViewRegister = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      name: 'Kaique Bernardo',
      mail: 'kaiue@hotmail.com',
      password: 'Ab@102030',
      passwordConf: 'Ab@102030',
      remember: true,
    },
  });

  const { handleSubmit } = methods;

  return (
    <S.Container>
      <S.Body>
        <S.Icon>
          <S.LogoCine src={require('../../assets/png/logoCine.png')} alt={''} />
        </S.Icon>
        <FormProvider {...methods}>
          <S.Form>
            <S.Input>
              <InputDefault
                label={'Nome'}
                position={EInputPosition.right}
                type={EInputType.text}
                isLowerCase={true}
                name={'name'}
                placeholder={''}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'Email'}
                position={EInputPosition.right}
                type={EInputType.mail}
                isLowerCase={true}
                name={'mail'}
                placeholder={''}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'Senha'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'password'}
                placeholder={''}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'Confirmar senha'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'passwordConf'}
                placeholder={''}
              />
            </S.Input>
            <S.Buttons>
              <S.Button>
                <ButtonGo
                  label={'Salvar'}
                  onClick={async () => {
                    const data: IRegister = await methods.getValues();
                    await serviceAuth.onRegister(data, navigate);
                  }}
                />
              </S.Button>
            </S.Buttons>
            <S.Registers>
              <S.Button>
                <ButtonGo type={3} label={'Cancelar'} />
              </S.Button>
            </S.Registers>
          </S.Form>
        </FormProvider>
      </S.Body>
    </S.Container>
  );
};

export default ViewRegister;
