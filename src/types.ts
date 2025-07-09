export interface AppStoreSearchOptions {
  term: string;
  num?: number;
  page?: number;
  country?: string;
  lang?: string;
}

export interface AppInfo {
  id: number;
  title: string;
  url: string;
}