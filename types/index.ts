export interface Post {
  body: string;
  slug: string;
  title: string;
  author: string;
  description: string;
  category: string;
  tags: string;
  metaimage: string;
  image: string;
  placeholder: string;
  date: string;
  content: string;
  alt: string;
}

export interface Project {
  body?: string;
  slug: string;
  id: string;
  path: string;
  title: string;
  type?: string;
  index?: number;
  project_type?: string;
  cover_photo?: string;
  cover_placeholder_photo?: string;
  color?: string;
  author?: string;
  description?: string;
  tags?: string;
  metaimage?: string;
  date?: string;
  content?: string;
  behance?: string;
  website?: string;
  appstore?: string;
  googleplay: string;
  password?: string;
}
