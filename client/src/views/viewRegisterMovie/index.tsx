import { NavigateFunction, useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import ButtonAddImage from 'components/buttonAddImage';
import InputDefault from 'components/inputDefault';
import LinkLabel from 'components/linkLabel';
import { EInputPosition, EInputType } from 'domains/enums/EInput';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';

import serviceAuth from 'services/serviceAuth';
import { ILogin } from 'domains/interfaces/login';

const ViewRegisterMovie = () => {
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
        <FormProvider {...methods}>
          <S.Form>
          <ButtonAddImage label={"Adicionar imagem"}/>
            <S.Input>
              <InputDefault
                label={'Título'}
                position={EInputPosition.right}
                type={EInputType.mail}
                isLowerCase={true}
                name={'email'}
                placeholder={''}
              />
            </S.Input>
            <S.InputRow>
              <InputDefault
                label={'Categoria'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'nota'}
                placeholder={''}
              />
              <S.InputSmall>
              <InputDefault
                label={'Nota'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'nota'}
                placeholder={''}
              />
              </S.InputSmall>
              <S.InputSmall>
              <InputDefault
                label={'Duração'}
                position={EInputPosition.right}
                type={EInputType.password}
                isLowerCase={true}
                name={'Duração'}
                placeholder={''}
              />
              </S.InputSmall>
            </S.InputRow>
            <S.Input>
              <InputDefault
                label={'Sinopse'}
                position={EInputPosition.right}
                type={EInputType.mail}
                name={'email'}
              />
            </S.Input>
            
            <S.Buttons>
              <S.Button>
                <ButtonGo
                  label={'Cadastrar'}
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

export default ViewRegisterMovie;
