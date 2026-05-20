export interface ActivePromotionEntityProps {
  name: string
  voucherCode: string
  description: string
  expiryDate: string
}

export class ActivePromotionEntity {
  readonly name: string
  readonly voucherCode: string
  readonly description: string
  readonly expiryDate: string

  constructor(props: ActivePromotionEntityProps) {
    this.name = props.name
    this.voucherCode = props.voucherCode
    this.description = props.description
    this.expiryDate = props.expiryDate
  }
}
