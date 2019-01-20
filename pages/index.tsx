import React, { PureComponent } from 'react'
import Head from 'next/head'
import { bindActionCreators, Dispatch } from 'redux'

import { IReduxState, ICurrency } from '../lib/types/reducers'
import { getData } from '../lib/redux/actions'
import { connect } from 'react-redux'

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
        console.log(this.props)

        return (
            <div>
                <Head>
                    <title>NextJS Page title</title>
                </Head>
                <div>Hello Next.js</div>
            </div>
        )
    }
}
