import store from "./reducers/reducer";

const addItem = (itemData) => {
  const state = store.getState();
  const { id } = state[state.length - 1];
  const item = {
    ...itemData,
    id: id + 1,
    key: String(id + 1),
  };
  store.dispatch({
    type: 'ADD_ITEM',
    payload: {
      item
    }
  })
};

const deleteItem = (id) => store.dispatch({
  type: 'DELETE_ITEM',
  payload: {
    id
  }
})

const editItem = (item) => store.dispatch({
  type: 'EDIT_ITEM',
  payload: {
    item,
  }
})

export {
  addItem,
  deleteItem,
  editItem
}