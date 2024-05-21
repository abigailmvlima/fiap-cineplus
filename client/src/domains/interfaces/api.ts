export interface IRegsiterUserData {
  mail: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface ILoginData {
  mail: string;
  password: string;
}

export interface IMovie {
  title: string;
  category: {
    title: string;
    id: string;
  };
  note: string;
  duration: string;
  sinopsis: string;
  _id: string;
}
