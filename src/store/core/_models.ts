import { PaginationModel } from '../../constants/_models';

export interface UserState {
  users: [] | null;
  pagination: PaginationModel | null;
  isLoading: boolean;
  error: any;
}

export interface ApiQueryResponse {
  data: [];
  pagination: PaginationModel;
}
