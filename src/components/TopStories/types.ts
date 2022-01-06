export interface Item {
  id: number;
  place: number;
  type: string;
  title: string;
  score: number;
  by: string;
  url: string;
  parent: string;
  time: number;
  kids: [Item]
  totalKidsCount: number;
  text?: string;
}
