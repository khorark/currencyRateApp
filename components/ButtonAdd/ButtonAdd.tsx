import { PureComponent, MouseEvent } from 'react'

import './ButtonAdd.less'
import PopupMenu from '../PopupMenu/PopupMenu'
import { ICurrency } from '../../lib/types/reducers'

interface IButtonAddProps {
    currencyList: ICurrency[]
    onClickAppend: (code: string) => void
}
interface IButtonAddState {
    showMenu: boolean
}

export default class ButtonAdd extends PureComponent<IButtonAddProps, IButtonAddState> {
    public state = {
        showMenu: false,
    }

    public render() {
        const { showMenu } = this.state
        const { currencyList, onClickAppend } = this.props

        return (
            <div className={'add_container'}>
                <div className={'button_container'} onClick={this.handleOpenMenu}>
                    <div className={'icon_add'} />
                    <div className={'text'}>Добавить валюту</div>
                </div>
                <PopupMenu visible={showMenu} list={currencyList} onClick={onClickAppend} />
            </div>
        )
    }

    private handleOpenMenu = (event: MouseEvent) => {
        event.preventDefault()
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.handleCloseMenu)
        })
    }

    private handleCloseMenu = () =>
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.handleCloseMenu)
        })
}
