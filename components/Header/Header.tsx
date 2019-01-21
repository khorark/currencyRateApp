import './HeaderStyles.less'
import { getNowDate } from '../../lib/helpers/dateHelper'

interface IHeader {
    onClickUpdate: () => void
}

const Header = ({ onClickUpdate }: IHeader) => (
    <div className={'header_container'}>
        <div className={'title'}>Курс валют</div>
        <div className={'title_date'}>{getNowDate()}</div>
        <div className={'title_text'}>RUB</div>
        <div className={'update_text'} onClick={onClickUpdate}>
            Обновить
        </div>
    </div>
)

export default Header
