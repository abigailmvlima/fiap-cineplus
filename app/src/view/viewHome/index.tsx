import { useContext, useEffect, useState } from 'react';
import * as S from './styles';
import { Image } from 'react-native';

import svg from '@assets/svg';
import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';

import ListMovies from '@components/listMovies';
import serviceMovies from '@service/serviceMovies';
import { IMovie } from '@domain/interfaces/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ViewHome = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const [list, setList] = useState<IMovie[]>();

  const onLoad = async () => {
    const data = await serviceMovies.onMovies();
    setList(data);
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <S.Container themeSelected={theme}>
      <S.Content themeSelected={theme}>
        <S.LogoCinePlus>
          <Image
            source={require('../../assets/images/logoCineHorizontal.png')}
            style={{ width: 250 }} // Ajuste o tamanho conforme necessário
            resizeMode="contain"
          />
        </S.LogoCinePlus>

        <S.ListMovies>
          <ListMovies data={list} />
        </S.ListMovies>
      </S.Content>
      <S.Footer>
        <TouchableOpacity
          onPress={() => {
            route.registerMovies();
          }}
        >
          <svg.PlusCircle />
        </TouchableOpacity>
      </S.Footer>
    </S.Container>
  );
};

export default ViewHome;
