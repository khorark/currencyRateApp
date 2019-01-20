import React, { PureComponent } from 'react'
import Head from 'next/head'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import memoizeOne from 'memoize-one'

import './styles/index.less'
import { IReduxState, ICurrency } from '../lib/types/reducers'
import { getData, appendCurrency, removeCurrency } from '../lib/redux/actions'
import Header from '../components/Header/Header'
import CurrencyField from '../components/CurrencyField/CurrencyField'

interface IDispatch {
    getData: () => void
    appendCurrency: ({ code }: { code: string }) => void
    removeCurrency: ({ code }: { code: string }) => void
}
interface IAppProps extends IDispatch {
    data: ICurrency[]
    listShowCurrency: string[]
}

const mapStateTopProps = ({ data, listShowCurrency }: IReduxState) => ({
    data,
    listShowCurrency,
})

const mapDispatchTopProps = (disptach: Dispatch) => ({
    getData: bindActionCreators(getData, disptach),
    appendCurrency: bindActionCreators(appendCurrency, disptach),
    removeCurrency: bindActionCreators(removeCurrency, disptach),
})

@(connect as any)(mapStateTopProps, mapDispatchTopProps)
export default class App extends PureComponent<IAppProps> {
    private getCurrencyList = memoizeOne((data, listShowCurrency) =>
        data.filter(({ CharCode }: ICurrency) => listShowCurrency.includes(CharCode)),
    )
    public componentDidMount() {
        this.props.getData()
    }

    public render() {
        const { data, listShowCurrency } = this.props
        const currencyList: ICurrency[] = this.getCurrencyList(data, listShowCurrency)

        return (
            <div>
                <Head>
                    <title>NextJS Page title</title>
                </Head>
                <div className={'app_container'}>
                    <div className={'main_container'}>
                        <Header />
                        <div className={'currency_list'}>
                            <div className={'currency_list_header'}>
                                <div>№</div>
                                <div>Валюта</div>
                                <div>Текущее</div>
                                <div>Предыдущее</div>
                                <div>Динамика</div>
                                <div />
                            </div>
                            {currencyList.map(({ ID, CharCode, Value, Previous }, idx) => (
                                <CurrencyField
                                    id={ID}
                                    name={CharCode}
                                    value={Value}
                                    prevValue={Previous}
                                    idx={idx}
                                    onClickRemove={this.handleRemoveCurrency}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    private handleRemoveCurrency = (code: string) => this.props.removeCurrency({ code })
}
