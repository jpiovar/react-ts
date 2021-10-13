import { ActionTypes, Table } from "../types/action-types-table";

const initialState: Table = {
  items: [],
  loading: false,
  error: null
};
export const tableReducer = (state = initialState, { type, payload }: { type: any, payload: any }) => {
  switch (type) {
    case ActionTypes.SET_TABLE_ALL:
      return {
        ...state,
        items: payload
      };
    case ActionTypes.FETCH_TABLE_ALL:
      return {
        ...state,
        items: payload
      };
    default:
      return state;
  }
};

export const selectedTableItemReducer = (state = {}, { type, payload }: { type: any, payload: any }) => {
  switch (type) {
    case ActionTypes.SELECTED_TABLE_ITEM:
      return {
        ...state,
        ...payload
      };
    case ActionTypes.REMOVE_SELECTED_TABLE_ITEM:
      return {};
    default:
      return state;
  }
};