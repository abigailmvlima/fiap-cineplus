import * as S from './styles';
import { TListMovie } from 'domains/types/TListMovie';

type TProps = {
  data: TListMovie;
};

const ItemMovie = ({ data }: TProps) => {
  return (
    <S.Container>
      <S.Image>
        <S.Photo src={data.image} />
      </S.Image>
      <S.Body>
        <S.Title>{data.title}</S.Title>
        <S.RowBase>
          <S.Row>
            <S.Col>
              <S.Text1>{data.category.title}</S.Text1>
            </S.Col>
            <S.Col>
              <S.Text1>{data.duration}</S.Text1>
            </S.Col>
          </S.Row>
          <S.Row>
            <S.Col>
              <S.Text2>{data.note}</S.Text2>
            </S.Col>
            <S.Col>
              <S.Text2>saiba mais</S.Text2>
            </S.Col>
          </S.Row>

        </S.RowBase>
      </S.Body>
    </S.Container>
  );
};

export default ItemMovie;
