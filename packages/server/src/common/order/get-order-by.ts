import { SortOrder } from './sort-order';

export function getOrderBy<T extends string>(
  orders: { field: T; order: keyof typeof SortOrder }[],
): { [p: string]: keyof typeof SortOrder }[] {
  return orders.map(({ field, order }) => ({
    [`${field}`]: order,
  }));
}
