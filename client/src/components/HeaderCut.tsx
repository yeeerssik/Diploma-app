import { Link, useNavigate } from 'react-router-dom';
import { Menu, Dropdown, Button } from 'antd'
import logo from '../logo.svg';
import '../styles/header.scss';

function HeaderCut() {
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
            <header className='HeaderCut'>
                <div className='d-flex'>
                    <Link to='/' className='logo'>
                        <div className='ml-50 mt-20'>
                            <img src={logo} alt='logo' />
                        </div>
                    </Link>
                    <div className='headerBar d-flex flex-wrap'>
                        <a className='barItem mr-20' href='./Resume/builder'>Создать резюме</a>
                        <a className='barItem mr-20' href='/Login' style={(username === "") ? { display: 'none' } : {}}>Вход</a>

                    </div>

                    <div className="dropDownMenu">
                        <Dropdown overlay={menu} placement='bottomLeft'>
                            <Button type='text'>
                                <div className='profile d-flex mr-30' style={(username === "") ? { display: 'none' } : {}}>
                                    <img className='profilePhoto mr-15' src='../utils/user.jpg' alt='profile' style={(username === "") ? { display: 'none' } : {}}></img>
                                    <p className='profileInfo' style={(username === "") ? { display: 'none' } : {}}>{username ?? ""}</p>
                                </div>
                            </Button>
                        </Dropdown>
                    </div>
                    {/* <div className='langSwitcher d-flex mr-30 ml-20 m-auto flex-wrap'>
                        <div className='switcherItem'>Қаз</div>
                        <div className='switcherItem active'>Рус</div>
                        <div className='switcherItem'>Eng</div>
                    </div> */}
                </div>
            </header>
            <div className='rotatedBannerHeaderCut p-30'></div>
        </div>

    );
}

export default HeaderCut;