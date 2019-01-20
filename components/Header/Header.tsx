import './HeaderStyles.less'

const Header = () => (
    <div className={'header_container'}>
        <div className={'title'}>Курс валют</div>
        <div className={'title_date'}>
            {new Date().toLocaleString('ru', {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
            })}
        </div>
        <div className={'title_text'}>RUB</div>
    </div>
)

export default Header
