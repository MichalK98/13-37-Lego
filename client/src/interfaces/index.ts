export type Lego = {
  all_parts: number;
  total_sets: number;
  total_figs: number;
};

export type Profile = {
  lego: Lego;
  username: string;
};

export type PartDetail = {
  name: string;
  part_img_url: string;
  part_url: string;
};

export type Part = {
  part: PartDetail[];
  quantity: number;
};

export type AllParts = {
  next: string | null;
  previous: string | null;
  results: Part[];
};

export type SetDetail = {
  name: string;
  set_img_url: string;
  set_url: string;
  num_parts: number;
};

export type Set = {
  part: SetDetail[];
  quantity: number;
};

export type AllSets = {
  next: string | null;
  previous: string | null;
  results: Set[];
};

export type FigureDetail = {
  name: string;
  set_img_url: string;
  set_url: string;
  num_parts: number;
};

export type Figure = {
  minifig: FigureDetail[];
  quantity: number;
};

export type AllFigures = {
  next: string | null;
  previous: string | null;
  results: Figure[];
};
