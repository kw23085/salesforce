import './index.scss'
import logo from '../img/logo-salesforce.svg'


export default function Nav({ links }) {

    return (
        <nav className="nav">
            <img src={logo} className="logo" alt="salesforce-logo"/>
            <ul className="nav__menu">
                {
                    links.map(item => {
                        return <li><a className="nav__link" href={item.url}>{item.title}</a></li>
                    })
                }
            </ul>
        </nav>
    )
}