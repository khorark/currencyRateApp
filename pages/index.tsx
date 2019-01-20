import React, { PureComponent } from 'react'
import Head from 'next/head'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import './styles/index.less'
import { IReduxState, ICurrency } from '../lib/types/reducers'
import { getData } from '../lib/redux/actions'
import Header from '../components/Header/Header'
import CurrencyField from '../components/CurrencyField/CurrencyField'

interface IDispatch {
    getData: () => void
}
interface IAppProps extends IDispatch {
    data: ICurrency[]
}

const mapStateTopProps = ({ data }: IReduxState) => ({
    data,
})

const mapDispatchTopProps = (disptach: Dispatch) => ({
    getData: bindActionCreators(getData, disptach),
})

@(connect as any)(mapStateTopProps, mapDispatchTopProps)
export default class App extends PureComponent<IAppProps> {
    public componentDidMount() {
        this.props.getData()
    }

    public render() {
        const { data } = this.props

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
                            {data.map(({ ID, CharCode, Value, Previous }, idx) => (
                                <CurrencyField id={ID} name={CharCode} value={Value} prevValue={Previous} idx={idx} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
