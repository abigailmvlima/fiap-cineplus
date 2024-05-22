import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";

import * as S from "./styles";

import svg from "@assets/svg";
import { ButtonGo } from "@components/buttonGo";
import { InputForm } from "@components/inputForm";
import { ContextNavigation } from "@context/contextNavigation";
import { ContextTheme } from "@context/contextTheme";
import { EInputPosition, EInputType,EInputSize } from "@domain/enum/EInput";

import { IContextTheme } from "@domain/interfaces/IContextTheme";
import { TNavigation } from "@domain/types/TNavigation";
import { ETheme } from "@domain/enum/ETheme";

const ViewRegister = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      mail: "",
      pass: "",
      rememberLogin: true,
    },
  });

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <S.AddButton>
          <svg.PlusCircle />
        </S.AddButton>
        <S.Form>
          <FormProvider {...methods}>
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.text}
              isLowerCase={true}
              name={"Título"}
              placeholder={""}
            />
            <S.Row>
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              size={EInputSize.big}
              type={EInputType.text}
              isLowerCase={true}
              name={"Categoria"}
              placeholder={""}
            />
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              size={EInputSize.small}
              type={EInputType.text}
              isLowerCase={true}
              name={"Nota"}
              placeholder={""}
            />
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              size={EInputSize.big}
              type={EInputType.text}
              isLowerCase={true}
              name={"Duração"}
              placeholder={""}
            />
            </S.Row>
              <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.text}
              isLowerCase={false}
              name={"Sinopse"}
              placeholder={""}
            />
          </FormProvider>
        </S.Form>
        <S.Buttons>
          <S.ButtonGo>
            <ButtonGo theme={theme} label={"Salvar"} onPress={route.home} />
          </S.ButtonGo>
          <S.ButtonGo>
            <ButtonGo
              theme={theme}
              label={"Cancelar"}
              onPress={route.login}
              type={2}
            />
          </S.ButtonGo>
        </S.Buttons>
      </S.Contents>
    </S.Container>
  );
};

export default ViewRegister;