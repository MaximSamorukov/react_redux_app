import React, { useState } from "react";
import { connect } from 'react-redux';
import { Table } from "antd";
import './styles/header.css';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import AddItemModal from "./AddItem";
import { deleteItem } from "../actions";
import { columns } from "./tableColumns";

const EditSell = ({ item }) => {
  const [visible, setVisible] = useState(false);
  const style = {
    fontSize: 18
  }
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: 70
      }}>
        <EditOutlined onClick={() => console.log(item)} style={style} />
        <CloseCircleOutlined onClick={() => deleteItem(item.id)} style={{ ...style, color: 'red' }} />
      </div>
      <AddItemModal visible={visible}/>
    </>
  )
}

const dataTable = store => store
  .map((item) => ({ ...item, edit: <EditSell item={item} /> }));

const TableComponent = ({ items }) => {

  return (
    <div className="table">
      <Table dataSource={dataTable(items)} columns={columns} />
    </div>
  )
}

const mapStateToProps = (items) => {
  return { items };
};

export default connect(mapStateToProps)(TableComponent);
