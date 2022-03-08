import React, { useState } from "react";
import { Modal, Input } from "antd";
import { editItem } from "../actions";

const EditItemModal = ({ visible, fields, onCancel }) => {
  const [ items, setItems ] = useState(fields)

  const updateDate = (field) => (e) => {
    setItems((info) => ({ ...info, [field]: e.target.value }) );
  }
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      title="Edit Item"
      onOk={() => {
        editItem(items);
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

export default EditItemModal;