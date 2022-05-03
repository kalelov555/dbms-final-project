import { Drawer, Button, Typography } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import React, { useState } from 'react'
import { useRouter } from 'next/router';

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);


const SearchByName = () => {
  const router = useRouter();

  const [state, setState] = useState({ visible: false })

  const onSearch = (value) => {
    console.log("value", value);
    
    router.push(`/list/books/${value.toUpperCase()}`);
  }


  const showDrawer = () => {
    setState({
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      visible: false,
    });
  };

  return (
    <div className="site-drawer-render-in-current-wrapper">
      <Typography>Are you lazy to find book that you wish from the list? No problem.
        You can just searh right here. Click the button</Typography>

      <div style={{ marginTop: 16 }}>
        <Button type="primary" onClick={showDrawer}>
          Open
        </Button>
      </div>
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={state.visible}
        getContainer={false}
        style={{ position: 'absolute' }}
      >
        <p>Type name</p>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          suffix={suffix}
          onSearch={onSearch}
        />
      </Drawer>
    </div>
  );
}

export default SearchByName;
