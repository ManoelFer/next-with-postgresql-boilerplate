export interface INote {
  id: string;
  note?: string;
  date?: string;
}

export interface ICreateNoteBody {
  note?: string;
  date?: string;
}
