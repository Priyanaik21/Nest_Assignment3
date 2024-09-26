import { Like } from 'typeorm';

interface QueryParams {
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  order?: 'ASC' | 'DESC';
}

export function applyPaginationSearchSort(queryParams: QueryParams, searchFields: string[]) {
  const { page, limit, search = '', sortBy, order = 'ASC' } = queryParams;

  const skip = page && limit ? (page - 1) * limit : undefined;
  const take = limit || undefined;

  const searchConditions = search
    ? searchFields.map((field) => ({ [field]: Like(`%${search}%`) }))
    : [];

  return {
    skip, 
    take, 
    order: sortBy ? { [sortBy]: order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC' } : undefined, 
    where: searchConditions.length > 0 ? searchConditions : {}, 
  };
}
