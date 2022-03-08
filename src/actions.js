import store from "./reducers/reducer";

const addItem = ({ item }) => store.dispatch({
  type: 'ADD_ITEM',
  payload: {
    item,
  }
});

const deleteItem = (id) => store.dispatch({
  type: 'DELETE_ITEM',
  payload: {
    id
  }
})

export {
  addItem,
  deleteItem
}