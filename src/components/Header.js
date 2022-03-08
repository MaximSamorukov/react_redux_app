import React from "react";
import { Button } from 'antd';
import './styles/header.css';

const Header = () => {
  return (
    <div className="header">
      <Button style={{ marginRight: 10 }} type="primary">Add</Button>
      <Button type="primary">Log out</Button>
    </div>
  )
}

export default Header;
