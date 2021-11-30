export interface StoryData {
  type: string;
  title: string;
  score: number;
  by: string;
  url: string;
  time: number;
  totalKidsCount: number;
  text?: string;
}

export interface Story {
  id: number;
  payload: StoryData;
}
