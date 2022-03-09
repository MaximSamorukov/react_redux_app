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
  const [ifValid, setIfValid] = useState(true);

  const updateDate = (field) => (e) => {
    setItems((info) => ({ ...info, [field]: e.target.value }) );
  }

  const nameNotValid = items.name.length === 0;
  const ageNotValid = String(items.age).length === 0;
  const addressNotValid = items.address.length === 0;
  const formValid = !nameNotValid && !ageNotValid && !addressNotValid;

  return (
    <Modal
      title="Add Item"
      visible={visible}
      onCancel={() => {
        setItems(emptyObject);
        setIfValid(true);
        onCancel();
      }}
      onOk={() => {
        if (formValid) {
          setIfValid(true);
          addItem(items);
          setItems(emptyObject);
          onCancel();
          return;
        }
        setIfValid(false);
      }}
    >
      <Input
        addonBefore="Name"
        value={items.name}
        onChange={updateDate('name')}
        status={(!ifValid && nameNotValid) ? 'error' : ''}
        style={{
          marginBottom: 10,
        }}
      />
      <Input
        type="number"
        addonBefore="Age"
        value={items.age}
        onChange={updateDate('age')}
        status={(!ifValid && ageNotValid) ? 'error' : ''}
        style={{
          marginBottom: 10,
        }}
      />
      <Input
        addonBefore="Address"
        value={items.address}
        onChange={updateDate('address')}
        status={(!ifValid && addressNotValid) ? 'error' : ''}
        style={{
          marginBottom: 10,
        }}
      />
    </Modal>
  )
}

export default AddItemModal;