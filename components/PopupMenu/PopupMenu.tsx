import './PopupMenuStyles.less'
import { ICurrency } from '../../lib/types/reducers'

interface IPopupMenu {
    list: ICurrency[]
    visible: boolean
    onClick: (code: string) => void
}

const PopupMenu = ({ list, visible, onClick }: IPopupMenu) =>
    (visible && (
        <div className={'popup_container'}>
            {list.map(({ ID, CharCode, Name }) => (
                <div key={ID} className={'field'} title={Name} onClick={onClick.bind(null, CharCode)}>
                    {CharCode}
                </div>
            ))}
        </div>
    )) ||
    null

export default PopupMenu
