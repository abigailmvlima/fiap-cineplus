import { EButtonType } from 'domains/enums/EButtons';
import { MouseEventHandler, useRef, useState } from 'react';
import * as S from './styles';
import { Controller, useFormContext } from 'react-hook-form';

type TProps = {
  label?: string;
  onClick?: MouseEventHandler | undefined;
  type?: EButtonType;
};

const ButtonAddImage = ({
  label,
  onClick,
  type = EButtonType.default,
}: TProps) => {
  const { control, setError, clearErrors, formState, getValues } =
    useFormContext();
  const [base64, setBase64] = useState<string>('');
  const inputFileRef = useRef<HTMLInputElement | null>(null); 

  return (
    <S.Container>
      <S.Text>{label}</S.Text>
      <Controller
        control={control}
        rules={{
          required: false,
        }}
        render={({ field: { onChange } }) => {

          const handleFileChange = (event: any) => {
            const file = event.target.files[0];
            if (file) {
              const reader: any = new FileReader();
              reader.onloadend = () => {
                const result = reader.result;
                onChange(result);
                setBase64(result as string);
              };
              reader.readAsDataURL(file);
            }
          };

          return (
            <S.Base>
              <S.Button onClick={() => inputFileRef.current?.click()}>
                {base64 && (
                  <S.ImageBackground style={{ backgroundImage: `url(${base64})` }} />
                )}

                <S.Icon>
                  <S.IconPlus />
                </S.Icon>
              </S.Button>

              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={inputFileRef} 
                style={{ display: 'none' }} 
              />
            </S.Base>
          );
        }}
        name={'image'}
      />
    </S.Container>
  );
};

export default ButtonAddImage;
