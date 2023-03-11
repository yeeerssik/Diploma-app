import 'macro-css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';
import logo from '../logo.svg';
import '../styles/footer.scss';

function Footer() {
  return (
    <div>
      <div className='rotatedBannerFooter p-30'></div>
      <Layout.Footer>
        <div className='footerBody d-flex flex-row flex-wrap justify-center align-center pt-50'>
          <div className='parentColumn mr-50'>
            <ul className="childColumn m-10">
              <li className="childRow">
                <a href='/Resume/Builder'>Создать резюме</a>
              </li>
              <li className="childRow">
                <a href='/Resume'>Шаблоны резюме</a>
              </li>
            </ul>
          </div>
          <div className='parentColumn mr-50'>
            <ul className="childColumn m-10">
              <li className="childRow">
                <a href='/Resume/Importance'>Важность составления резюме</a>
              </li>
              <li className="childRow">
                <a href='/Resume/Tutorial'>Как составлять резюме?</a>
              </li>
            </ul>
          </div>
          <div className='parentColumn mr-50'>
            <ul className="childColumn m-10">
              <li className="childRow">
                <a href='/About-us'>О нас</a>
              </li>
              <li className="childRow">
                <a href='/Contact'>Контакты</a>
              </li>
            </ul>
          </div>
        </div>
        <div className='footerText d-flex align-center justify-between'>
          <Link to='/'>
            <div className='logo ml-10'>
              <img height={30} width={170} src={logo} alt='logo' />
            </div>
          </Link>
          <p className='footerHeader mr-10'>2023 © CVstud.io, Все права защищены.</p>
        </div>
      </Layout.Footer>
    </div>
  );
}

export default Footer;
