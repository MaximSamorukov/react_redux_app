import React, { useState } from "react";
import { connect } from 'react-redux';
import { Table } from "antd";
import './styles/header.css';
import { EditOutlined, CloseCircleOutlined } from '@ant-design/icons';
import EditItemModal from "./EditItem";
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
        <EditOutlined onClick={() => setVisible(true)} style={style} />
        <CloseCircleOutlined onClick={() => deleteItem(item.id)} style={{ ...style, color: 'red' }} />
      </div>
      <EditItemModal visible={visible} fields={item} onCancel={() => setVisible(false)} />
    </>
  )
}

const dataTable = store => store
  .map((item) => ({ ...item, edit: <EditSell item={item} /> }));

const TableComponent = ({ items }) => {
  console.log(items);
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
