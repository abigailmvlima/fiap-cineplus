import { useNavigate } from 'react-router-dom';

import * as S from './styles';
import svg from 'assets/svg';
import { useEffect, useState } from 'react';
import serviceMovies from 'services/serviceMovies';
import ListMovies from 'components/listMovies';
import { IMovie } from 'domains/interfaces/api';

const ViewMovieDetail = () => {
  const navigate = useNavigate();
  const [list, setList] = useState<IMovie[]>()

  const onLoad = async () => {
    const data = await serviceMovies.onMovies();
    setList(data)
  }

  useEffect(() => {
    onLoad();
  }, []);


  return (
    <S.Container>
      <S.Body>
        <S.ButtonRow>
        <S.BaseButtom>
          <svg.ArrowBack width={40} onClick={() => {
            navigate('/')
          }} />
        </S.BaseButtom>
        <S.Title>Back</S.Title>
        </S.ButtonRow>
        <S.MovieContainer>
        <S.Image>
          <S.IconEcoMiles
            src={require('../../assets/png/garfieldSmall.png')}
            alt={''}
          />
        </S.Image>
          <S.MovieTitle>{"Garfield - Fora de Casa"}</S.MovieTitle>
          <S.TextRow>
          <S.MovieType>Infantil</S.MovieType>
          <S.MovieType>1h39</S.MovieType>
          </S.TextRow>
          <S.StarRow>
          <svg.Star/>
          {"10/10"}
          </S.StarRow>
          <S.MovieType>Sinopse</S.MovieType>
          <S.MovieSinopsis>{"Em Garfield: Fora de Casa, o amado gato de estimação laranja (dublado por Chris Pratt) está de volta para mais uma aventura inesquecível: após reencontrar seu pai, o gato de rua Vic (dublado por Samuel L. Jackson), que não via há muito tempo, Garfield e o cãozinho Odie acabam se envolvendo em um arriscado assalto."}</S.MovieSinopsis>
        </S.MovieContainer>
      </S.Body>
    </S.Container>
  );
};

export default ViewMovieDetail;
