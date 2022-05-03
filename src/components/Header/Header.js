import { Menu, Switch, Divider } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  FolderAddOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import Link from 'next/link';

const { SubMenu } = Menu;

const Header = () => {
  const [mode, setMode] = useState('inline');
  const [theme, setTheme] = useState('light');

  const changeMode = (value) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
      <Switch onChange={changeMode} /> Change Mode
      <Divider type="vertical" />
      <Switch onChange={changeTheme} /> Change Style
      <br />
      <br />
      <Menu style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
      >
        <Menu.Item key="main" icon={<MailOutlined />}>
          <Link href={"/home"}>Main page</Link>
        </Menu.Item>
        <Menu.Item key="list" icon={<CalendarOutlined />}>
          <Link href={"/list"}>List</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Search">
          <Menu.Item key="name"><Link href={"/form/name"}>by name</Link></Menu.Item>
          <Menu.Item key="genre"><Link href={"/form/genre"}>by genre</Link></Menu.Item>
        </SubMenu>
        <Menu.Item key="add" icon={<FolderAddOutlined />}>
          <Link href={"/form/add/book"}>Add books</Link>
        </Menu.Item>
        <Menu.Item key="link" icon={<LinkOutlined />}>
          <a href="https://www.nytimes.com/books/best-sellers/" target="_blank" rel="noopener noreferrer">
            The Greatest Books
          </a>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Header;
