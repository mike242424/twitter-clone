export interface UserInterface {
  id: number;
  username: string;
  avatar: string;
}

export interface PostInterface {
  id: string;
  username: string;
  avatar: string;
  content: string;
  created_at: string;
}
