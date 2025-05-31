export interface TagFilterItem {
  id: string;
  name: string;
  count: number; // Optional count for tag usage
}

export interface Post {
  id: string;
  title: string;
  description?: string;
  coverImage?: string;
  tags?: string[];
  author?: string;
  date?: string;
  modifiedDate?: string;
  slug: string;
}
