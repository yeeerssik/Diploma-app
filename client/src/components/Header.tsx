import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd'
import logo from '../logo.svg';
import '../styles/header.scss';

function Header(props: any) {
    const user = JSON.parse(localStorage.getItem('cv-studio-db')!);
    const navigate = useNavigate();
    const menu = (
        <Menu>
            <Menu.Item>
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='/profile'>Profile</Link>
            </Menu.Item>
            <Menu.Item onClick={() => {
                localStorage.removeItem('cv-studio-db')
                navigate(0);
            }}>
                <span>Logout</span>
            </Menu.Item>
        </Menu>
    );

    const username = user ? user.username : "";

    return (
        <div className='clear'>
            <div className='rotatedBannerHeader p-30'></div>
            <header className='Header'>

                <div className='d-flex'>
                    <Link to='/'>
                        <div className='logo m-30'>
                            <img height={51} width={218} src={logo} alt='logo' />
                        </div>
                    </Link>
                    <div className='headerBar d-flex flex-wrap'>
                        <a className='barItem mr-20' href='./Resume/Builder'>Создать резюме</a>
                        {/* <a className='barItem mr-20' href='#'>Шаблоны резюме</a> */}
                        <a className='barItem mr-20' href='./About-us'>Справка</a>
                        <a className='barItem mr-20' href='./Contacts'>Контакты</a>
                        {/* <Link className='barItem ml-40' to='/LoginPage'>Вход</Link> */}
                        <a className='barItem ml-40' href='./Login' style={(username) ? { display: 'none' } : {}}>Вход</a>
                    </div>
                    <div className="dropDownMenu">
                        <Dropdown overlay={menu} placement='bottomLeft'>
                            <Button type='text'>
                                <div className='profile d-flex mr-30' style={(username === "") ? { display: 'none' } : {}}>
                                    <img className='profilePhoto mr-15' src='./utils/user.jpg' alt='profile' style={(username === "") ? { display: 'none' } : {}}></img>
                                    <p className='profileInfo' style={(username === "") ? { display: 'none' } : {}}>{username ?? ""}</p>
                                </div>
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </header>
        </div>

    );
}

export default Header;