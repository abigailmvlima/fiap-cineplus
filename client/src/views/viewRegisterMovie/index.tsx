import { NavigateFunction, useNavigate } from 'react-router-dom';

import ButtonGo from 'components/buttonGo';
import ButtonAddImage from 'components/buttonAddImage';
import InputDefault from 'components/inputDefault';
import { EInputPosition, EInputType } from 'domains/enums/EInput';
import { FormProvider, useForm } from 'react-hook-form';
import * as S from './styles';

import serviceMovies from 'services/serviceMovies';
import { IMovieRegister } from 'domains/interfaces/movies';

const ViewRegisterMovie = () => {
  const navigate = useNavigate();
  const methods = useForm({
    defaultValues: {
      title: '',
      category: '',
      note: '',
      duration: '',
      sinopsis: '',
    },
  });

  return (
    <S.Container>
      <S.Body>
        <S.Image>
          <S.IconLogo
            src={require('../../assets/png/logoCineHorizontal.png')}
            alt={''}
          />
        </S.Image>
        <FormProvider {...methods}>
          <S.Form>
            <ButtonAddImage label={'Adicionar imagem'} />
            <S.Base>
              <S.Input>
                <InputDefault
                  label={'Título'}
                  position={EInputPosition.left}
                  type={EInputType.mail}
                  isLowerCase={true}
                  name={'title'}
                  placeholder={''}
                />
              </S.Input>
              <S.InputRow>
                <InputDefault
                  label={'Categoria'}
                  position={EInputPosition.left}
                  isLowerCase={true}
                  name={'category'}
                  placeholder={''}
                />
                <S.InputSmall>
                  <InputDefault
                    label={'Nota'}
                    position={EInputPosition.left}
                    isLowerCase={true}
                    name={'note'}
                    placeholder={''}
                  />
                </S.InputSmall>
                <S.InputSmall>
                  <InputDefault
                    label={'Duração'}
                    position={EInputPosition.left}
                    isLowerCase={true}
                    name={'duration'}
                    placeholder={''}
                  />
                </S.InputSmall>
              </S.InputRow>
              <S.Input>
                <InputDefault
                  label={'Sinopse'}
                  position={EInputPosition.left}
                  type={EInputType.mail}
                  name={'sinopsis'}
                />
              </S.Input>
            </S.Base>
            <S.Buttons>
              <S.Button>
                <ButtonGo
                  label={'Cadastrar'}
                  onClick={async () => {
                    const data: IMovieRegister = methods.getValues();
                    await serviceMovies.onMoviesRegister(data, navigate);
                  }}
                />
              </S.Button>
            </S.Buttons>
            <S.Registers>
              <S.Button>
                <ButtonGo
                  type={3}
                  label={'Cancelar'}
                  onClick={() => navigate('/home')}
                />
              </S.Button>
            </S.Registers>
          </S.Form>
        </FormProvider>
      </S.Body>
    </S.Container>
  );
};

export default ViewRegisterMovie;
