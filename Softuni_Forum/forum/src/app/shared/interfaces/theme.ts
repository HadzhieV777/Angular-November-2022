import { IUser } from './user';

export interface ITheme {
  _id: string,
  themeName: string;
  subscribers: string[];
  userId: IUser;
  posts: any;
  created_at: string;
  updated_at: string;
}
