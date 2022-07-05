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
  count: number;
  next: string | null;
  previous: string | null;
  results: Part;
};
