import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, Dropdown, Button } from 'antd'
import logo from '../logo.svg';
import '../styles/header.scss';

function HeaderCut() {
    const user = JSON.parse(localStorage.getItem('cv-studio-db')!);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(user ? false : true);
    
    var username = user ? user.username : "";
    
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
                        <a className='barItem mr-20' href='/Resume/Builder'>Создать резюме</a>
                        { isLoggedIn && <a className='barItem mr-20' href='/Login'>Вход</a>}

                    </div>

                    <div className="dropDownMenu">
                        <Dropdown overlay={menu} placement='bottomLeft'>
                            <Button type='text'>
                                {
                                    !isLoggedIn &&
                                        <div className='profile d-flex mr-30'>
                                            <img className='profilePhoto mr-15' src='../utils/user.jpg' alt='profile'></img>
                                            <p className='profileInfo'>{username}</p>
                                        </div>
                                }
                                
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