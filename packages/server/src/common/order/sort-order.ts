import { registerEnumType } from '@nestjs/graphql';

export enum SortOrder {
  // Specifies an ascending order for a given `orderBy` argument.
  asc = 'asc',
  // Specifies a descending order for a given `orderBy` argument.
  desc = 'desc',
}

registerEnumType(SortOrder, {
  name: 'SortOrder',
  description:
    'Possible directions in which to order a list of items when provided an `orderBy` argument.',
});
