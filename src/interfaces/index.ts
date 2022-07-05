export type PartDetail = {
  name: string;
  part_img_url: string;
  part_url: string;
};

export type Part = {
  part: PartDetail[];
  quantity: number;
};

export type Data = {
  next: string | null;
  previous: string | null;
  results: Part[];
};

export type Lego = {
  all_parts: number;
  total_sets: number;
  total_figs: number;
};

export type Profile = {
  lego: Lego;
  username: string;
};
