export interface Item {
  id: number;
  by: string;
  title: string;
  type: 'comment' | 'story' | 'job' | 'poll' | 'pollopt';
  kids: number[];
  score: number;
  time: number;
  descendants: number;
  text?: string;
  parent?: number;
  url?: string;
}

export interface ItemComment {
  id: number;
  by: string;
  time: number;
  comments: ItemComment[];
  commentsCount: number;
  parent?: number;
  text?: string;
  kids?: number[];
}
