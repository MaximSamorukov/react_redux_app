import { createStore } from 'redux';

const dataSource = [
  {
    key: '1',
    id: 1,
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    id: 2,
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

const reducer = (state = dataSource, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      const { item } = action.payload;
      return [...state, item];
    case 'DELETE_ITEM':
      const { id } = action.payload;
      const filteredState = state.filter((i) => i.id !== id);
      return filteredState;
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
