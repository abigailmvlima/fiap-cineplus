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

const ViewLogin = () => {
  const { route } = useContext<TNavigation>(ContextNavigation);
  const { theme } = useContext<IContextTheme>(ContextTheme);

  const methods = useForm({
    defaultValues: {
      mail: "",
      password: "",
      rememberLogin: true,
    },
  });

  return (
    <S.Container themeSelected={theme}>
      <S.Contents>
        <S.Header>
          <svg.LogoLogin />
        </S.Header>
        <S.Form>
          <FormProvider {...methods}>
            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.cpf}
              isLowerCase={true}
              name={"mail"}
              placeholder={""}
            />

            <InputForm
              position={EInputPosition.center}
              theme={theme}
              type={EInputType.password}
              isLowerCase={true}
              name={"password"}
              placeholder={""}
            />
          </FormProvider>
        </S.Form>
        <S.Buttons>
          <S.ButtonGo>
            <ButtonGo 
                theme={theme} 
                label={"Entrar"} 
                onPress={async () => {
                  const data: ILogin = await methods.getValues();                
                  await serviceAuth.onLogin(data, route.login);
                }}              
            />
          </S.ButtonGo>
          <S.TextOr themeSelected={theme}>ou</S.TextOr>
          <S.ButtomRegister>
            <ButtonLink
              theme={theme}
              label={"Cadastre-se"}
              onPress={async () => {
                const data: ILogin = await methods.getValues();                
                await serviceAuth.onLogin(data, route.login);
              }}              
            />
          </S.ButtomRegister>
        </S.Buttons>
      </S.Contents>
    </S.Container>
  );
};

export default ViewLogin;
