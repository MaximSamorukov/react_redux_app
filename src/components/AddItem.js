import React, { useState } from "react";
import { Modal, Input } from "antd";
import { addItem } from "../actions";

const emptyObject = {
  name: '',
  age: '',
  address: '',
}

const AddItemModal = ({ visible, onCancel }) => {
  const [ items, setItems ] = useState(emptyObject);

  const updateDate = (field) => (e) => {
    setItems((info) => ({ ...info, [field]: e.target.value }) );
  }

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title="Add Item"
      onOk={() => {
        addItem(items);
        setItems(emptyObject);
        onCancel();
      }}
    >
      <Input
        addonBefore="Name"
        value={items.name}
        onChange={updateDate('name')}
        style={{
          marginBottom: 10,
        }}
      />
      <Input
        addonBefore="Age"
        value={items.age}
        onChange={updateDate('age')}
        style={{
          marginBottom: 10,
        }}
      />
      <Input
        addonBefore="Address"
        value={items.address}
        onChange={updateDate('address')}
        style={{
          marginBottom: 10,
        }}
      />
    </Modal>
  )
}

export default AddItemModal;