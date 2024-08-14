export interface INote {
  id: string;
  note?: string;
  date?: string;
}

export interface INoteFieldErros {
  errors?: { note?: string[]; date?: string[] };
  success: boolean;
}

export interface ICreateNoteBody {
  note?: string;
  date?: string;
}
