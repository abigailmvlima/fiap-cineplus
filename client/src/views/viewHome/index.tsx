import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import svg from 'assets/svg';
import { useEffect, useState } from 'react';
import serviceMovies from 'services/serviceMovies';
import ListMovies from 'components/listMovies';
import { IMovie } from 'domains/interfaces/api';
import ButtonGo from 'components/buttonGo';

const ViewHome = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<IMovie[]>();

  const onLoad = async () => {
    const data = await serviceMovies.onMovies();
    setList(data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <S.Container>
      <S.Body>
        <S.Image>
          <S.IconLogo
            src={require('../../assets/png/logoCineHorizontal.png')}
            alt={''}
          />
        </S.Image>
        <S.BaseButtom>
          <svg.PlusCircle
            width={40}
            onClick={() => {
              navigate('/registerMovie');
            }}
          />
        </S.BaseButtom>
        <S.Row>
          <ListMovies data={list} />
        </S.Row>
        <S.Registers>
          <S.Button>
            <ButtonGo
              type={3}
              label={'Fechar'}
              onClick={() => navigate('/')}
            />
          </S.Button>
        </S.Registers>
      </S.Body>
    </S.Container>
  );
};

export default ViewHome;
