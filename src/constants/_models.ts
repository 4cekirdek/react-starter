import { ReactNode } from 'react';

export type WithChildren = {
  children: ReactNode;
};

export interface PaginationModel {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}
