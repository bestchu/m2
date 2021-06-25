// 贷款计算库
export enum RateType {
  // 等额本金
  rateType1,
  // 等额本息
  rateType2,
  // 等本等息
  rateType3,
}

export type RateCalcParams = {
  // 开始日期
  startDate?: number;
  // 贷款金额
  amount: number;
  // 贷款月数
  nper: number;
};

export class Rate {
  static calc(type: RateType, params: RateCalcParams) {
    switch (type) {
      case RateType.rateType1:
        break;
      case RateType.rateType2:
        break;
      case RateType.rateType3:
        break;
    }
  }
}
