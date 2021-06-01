import { InputType, Field, ReturnTypeFuncValue } from '@nestjs/graphql';
import { SortOrder } from './sort-order';
import { Type } from '@nestjs/common';
@InputType({ isAbstract: true })
class IOrderInput {
  orderBy;
  public getOrderBy() {
    return this.orderBy.map(({ field, order }) => ({
      [`${field}`]: order,
    }));
  }
}
export function OrderGenerate<T, K extends keyof T>(
  entity: Type<T>,
): Type<IOrderInput> {
  @InputType(`${entity.name}OrderByItem`)
  abstract class OrderItem {
    @Field(() => entity)
    field: K;
    @Field(() => SortOrder)
    order: SortOrder;
  }
  @InputType({ isAbstract: true })
  abstract class OrderInput {
    @Field(() => [OrderItem])
    orderBy: OrderItem[];
    public getOrderBy(): { [pk: string]: 'asc' | 'desc' }[] {
      return this.orderBy.map(({ field, order }) => ({
        [`${field}`]: order,
      }));
    }
  }
  return OrderInput as Type<IOrderInput>;
}
