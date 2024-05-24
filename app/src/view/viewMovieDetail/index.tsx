import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Image, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import * as S from './styles';
import svg from '@assets/svg';
import { ContextNavigation } from '@context/contextNavigation';
import { ContextTheme } from '@context/contextTheme';
import { IContextTheme } from '@domain/interfaces/IContextTheme';
import { TNavigation } from '@domain/types/TNavigation';

const ViewMovieDetail = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);
  const data = useSelector((state: any) => state.history.data);

  const onPressBack = () => {
    route.home();
  }

  return (
    <S.Container themeSelected={theme}>
      <ScrollView>
        <S.Contents>
          <S.Header>
            <TouchableOpacity onPress={onPressBack}>
              <S.Buttons>
                <svg.ArrowBack />
                <S.TextCategory>Back</S.TextCategory>
              </S.Buttons>
            </TouchableOpacity>
          </S.Header>
          <S.ImageContainer>
            <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: data?.image }}
              resizeMode="cover"
            />
          </S.ImageContainer>
          <S.TextTitle>{data?.title}</S.TextTitle>
          <S.Row>
            <S.TextCategory>{data?.category?.title}</S.TextCategory>
            <S.TextCategory>{data?.duration}</S.TextCategory>
          </S.Row>
          <S.InnerRow>
            <svg.Star />
            <S.TextStar>{data?.note}</S.TextStar>
          </S.InnerRow>
          <S.TextCategory>Sinopse</S.TextCategory>
          <S.TextSinopsis>{data?.sinopsis}</S.TextSinopsis>
        </S.Contents>
      </ScrollView>
    </S.Container>
  );
};

export default ViewMovieDetail;
