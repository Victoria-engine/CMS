import { IconName, ButtonAppearance, IntentTypes } from 'evergreen-ui'
import { History } from 'history'
import { RouteComponentProps } from 'react-router-dom'

export type ValueOf<T> = T[keyof T]

export type $TS_FIXME = any
export type ComponentType = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>

export type Store = {
  auth: AuthStore,
  app: AppStore,
  blog: BlogStore,
}

export interface PostEditProps {
  
}

export interface PostsProps {
  
}

export type ReduxAction = {
  payload: object | any,
  type: string,
  error: Error,
}

export type TabbarActionItem = {
  iconName: IconName,
  label: string,
  to?: string,
  isDisabled?: boolean,
  isLoading?: boolean,
  appearance?: ButtonAppearance,
  intent?: IntentTypes,

  onClick?: (...args: any) => void,
}

export interface SidebarProps {
  tabs: TabbarActionItem[],
  activeItem: History['location']['pathname'],
}

export interface TopbarProps {
  title: string,
  actions?: TabbarActionItem[],
}

export interface LayoutProps {
  history: History,
  hasSidebar: boolean,
}

export interface AppStore {
  error: string | null,
}

export interface AuthStore {
  authToken?: string,
  blogKey: string | null,
  working: boolean,
  error: string | null,
  success: boolean,
}

export type BlogPost = {
  tags: string[],
  _id: string,
  html: string,
  title: string,
  excerpt: string,
  visibility: 'public' | 'private' | 'not-listed',
  reading_time: number,
  author: string,
  createdAt: string,
  updatedAt: string,
  description?: string,
}

export type BlogData = {
  _id: string,
  description: string,
  name: string,
  author: string,
  key: string,
  posts: BlogPost[],
}

export type UserData = {
  firstName: string,
  lastName: string,
  email: string,
  createdAt: string,
}

export interface BlogStore {
  working: boolean,
  blog: {
    name: string,
    description: string,
    author: string,
    key: string,
    posts: BlogPost[],
  },
  user: UserData,
  error: string | null,
}

export interface LoginserPayload{
  credentials: {
    email: string,
    password: string,
  }
}
export interface LoginUserSuccessPayload {
  access_token: string,
  blogID: string,
}

export interface GetUserDataSuccess {
  blog: BlogData,
  user: UserData,
  posts: BlogPost[],
}

export interface PostLinkProps {
  postData: BlogPost,
}

export interface GatekeeperProps {
  Component: any,
  authToken: string,
  isAutorizing: boolean,
}

export interface GetPostByIDPayload {
  postID: string,
}

export type GetPostByIDSuccessPayload = BlogPost

export interface SavePostPayload {
  title: string,
  html: string,
  description?: string,
  visibility: BlogPost['visibility'],
  id?: string,
}

export interface LoginSignInSwitcherProps {
  isLoginActive: boolean,
  onChange: any,
}