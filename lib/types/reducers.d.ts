export interface IReduxState {
    data: ICurrency[]
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
