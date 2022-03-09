import React, { useState } from "react";
import { Modal, Input } from "antd";
import { editItem } from "../actions";

const EditItemModal = ({ visible, fields, onCancel }) => {
  const [ items, setItems ] = useState(fields)
  const updateDate = (field) => (e) => {
    setItems((info) => ({ ...info, [field]: e.target.value }) );
  }

  const nameNotValid = items.name.length === 0;
  const ageNotValid = String(items.age).length === 0;
  const addressNotValid = items.address.length === 0;
  const formValid = !nameNotValid && !ageNotValid && !addressNotValid;

  return (
    <Modal
      visible={visible}
      onCancel={() => {
        onCancel();
        setItems(fields);
      }}
      title="Edit Item"
      onOk={() => {
        if (formValid) {
          editItem(items);
          onCancel();
          return;
        }
      }}
    >
      <Input
        addonBefore="Name"
        value={items.name}
        onChange={updateDate('name')}
        status={nameNotValid ? 'error' : ''}
        style={{
          marginBottom: 10,
        }}
      />
      <Input
        type="number"
        addonBefore="Age"
        value={items.age}
        onChange={updateDate('age')}
        status={ageNotValid ? 'error' : ''}
        style={{
          marginBottom: 10,
        }}
      />
      <Input
        addonBefore="Address"
        value={items.address}
        onChange={updateDate('address')}
        status={addressNotValid ? 'error' : ''}
        style={{
          marginBottom: 10,
        }}
      />
    </Modal>
  )
}

export default EditItemModal;