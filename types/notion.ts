export interface NotionTag {
  id: string;
  name: string;
  count: number; // Optional count for tag usage
}

export interface NotionPost {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  tags?: NotionTag[];
  author?: string;
  date?: string;
}
