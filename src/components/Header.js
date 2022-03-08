import React, { useState } from "react";
import { Button } from 'antd';
import AddItemModal from "./AddItem";
import './styles/header.css';

const Header = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className="header">
        <Button
          style={{ marginRight: 10 }}
          type="primary"
          onClick={() => setVisible(true)}
        >Add</Button>
        {/*<Button type="primary">Log out</Button>*/}
      </div>
      <AddItemModal visible={visible} onCancel={() => setVisible(false)} />
    </>
  )
}

export default Header;
