export interface ListsType {
  title: string;
  subtitle?: string;
  link: string;
  img: string;
  active?: boolean;
  disabled?: boolean;
  isSmall?: boolean;
  isCompleted?: boolean;
}

export interface UserType {
  name: string;
  avatar: string;
  score?: number;
}

export interface WinnerType extends UserType {
  prize: string;
}
