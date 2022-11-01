export interface IAnswer {
  uuid: string;
  value: string;
  count: number;
  updatedAt: string;
  createdAt: string;
}

export interface IQuestion {
  uuid: string;
  isPublic: boolean;
  questionText: string;
  category: string;
  answers: IAnswer[];
  updatedAt: string;
  createdAt: string;
}
