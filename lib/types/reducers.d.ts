export interface IReduxState {
    data: ICurrency[]
    listShowCurrency: string[]
}

export interface ICurrency {
    CharCode: string
    ID: string
    Name: string
    Nominal: number
    NumCode: string
    Previous: number
    Value: number
}
