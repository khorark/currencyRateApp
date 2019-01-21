import './HeaderStyles.less'
import { getNowDate } from '../../lib/helpers/dateHelper'

const Header = () => (
    <div className={'header_container'}>
        <div className={'title'}>Курс валют</div>
        <div className={'title_date'}>{getNowDate()}</div>
        <div className={'title_text'}>RUB</div>
    </div>
)

export default Header
