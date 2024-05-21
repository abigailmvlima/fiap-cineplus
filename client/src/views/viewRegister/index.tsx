import { NavigateFunction, useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import InputDefault from 'components/inputDefault';
import LinkLabel from 'components/linkLabel';
import { EInputPosition, EInputType } from 'domains/enums/EInput';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';

import serviceAuth from 'services/serviceAuth';
import { ILogin } from 'domains/interfaces/login';

const ViewRegister = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      mail: '',
      password: '',
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
                label={'email'}
                position={EInputPosition.right}
                type={EInputType.mail}
                isLowerCase={true}
                name={'email'}
                placeholder={''}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'senha'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'password'}
                placeholder={'************'}
              />
            </S.Input>
            <S.Input>
              <InputDefault
                label={'Confirmar senha'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'password'}
                placeholder={'************'}
              />
            </S.Input>
            <S.Buttons>
              <S.Button>
                <ButtonGo
                  label={'Salvar'}
                  onClick={async () => {
                    const data: ILogin = methods.getValues();
                    await serviceAuth.onLogin(data, navigate);
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
