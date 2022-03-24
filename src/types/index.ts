export interface Item {
  id: number;
  place: number;
  type: 'comment' | 'story' | 'job' | 'poll' | 'pollopt';
  title: string;
  score: number;
  by: string;
  url: string;
  parent: string;
  time: number;
  /*
  *graphql api can handle "get all" children of a tree like structure of many levels
  * or threads. So, we hack it by getting all children and sending it as a JSON string
  * that then we convert to an array of objects
  */
  children: Array<ItemDetail>;
  totalChildrenCount: number;
  text?: string;
}

//to describe the children
export interface ItemDetail {
  id: number;
  created_at: string;
  created_at_i: number;
  type: 'comment' | 'story' | 'job' | 'poll' | 'pollopt';
  title: string;
  url: string;
  text?: string;
  points: number;
  author: string;
  parent_id?: number;
  story_id?: number;
  children: [ItemDetail];
}

