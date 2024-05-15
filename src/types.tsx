export interface IWear {
  id: number
  title: string
  img: string
  sizes: ISize[]
}

interface ISize {
  size: string
  quantity: number
}
