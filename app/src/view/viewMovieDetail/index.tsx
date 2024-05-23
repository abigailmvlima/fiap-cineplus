import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import * as S from "./styles";

import svg from "@assets/svg";
import { ButtonGo } from "@components/buttonGo";
import { ButtonLink } from "@components/buttonLink";
import { InputForm } from "@components/inputForm";
import { ContextNavigation } from "@context/contextNavigation";
import { ContextTheme } from "@context/contextTheme";
import { EInputPosition, EInputType } from "@domain/enum/EInput";
import { IContextTheme } from "@domain/interfaces/IContextTheme";
import { TNavigation } from "@domain/types/TNavigation";
import { ILogin } from "@domain/interfaces/login";
import serviceAuth from "@service/serviceAuth";

const ViewMovieDetail = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      mail: "elio.designer@hotmail.com",
      password: "Ab@102030",
      remember: true,
    },
  });

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <S.Header>
          <svg.ArrowBack/>
        <S.TextCategory>Back</S.TextCategory>
        </S.Header>

          <svg.Sonic />
        <S.TextTitle>Sonic</S.TextTitle>
        <S.Row>
        <S.TextCategory>Infantil</S.TextCategory>
        <S.TextCategory>1h39min</S.TextCategory>
        </S.Row>
        <S.InnerRow>
        <svg.Star />
        <S.TextStar>10/10</S.TextStar>
        </S.InnerRow>
        <S.TextCategory>Sinopse</S.TextCategory>
        <S.TextSinopsis>{"Nessa comédia de aventura live-action, Sonic e seu novo melhor amigo Tom (James Marsden) precisam se unir para defender o planeta do gênio maligno Dr. Robotnik (Jim Carrey) e seus planos de dominação total"}</S.TextSinopsis>

      </S.Contents>
    </S.Container>
  );
};

export default ViewMovieDetail;
