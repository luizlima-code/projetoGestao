export interface Pageable {
  pageNumber: number;
  pageSize: number;
  offset: number;
  unpaged: boolean;
  paged: boolean;
  sort: Sort;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}

export interface PageableResponse<T extends object> {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  last: boolean;
  first: boolean;
  sort: Sort;
  number: number;
  numberOfElements: number;
  size: number;
  empty: boolean;
}