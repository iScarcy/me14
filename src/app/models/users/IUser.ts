export interface IUser {
  id: number;
  codScout: string;
  nome: string;
  cognome: string;
  dataNascita: string;
  luogoNascita: string;
  mail: string;
  branca: string;
}

export interface ICapo extends IUser {
  ruolo: string;
}