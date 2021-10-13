import fakestoreapi from "../../api/fakeStoreApi";
import { ActionTypes } from "../types/action-types-table";

export const fetchTableAll = () => async (dispatch: any) => {
    const response = await fakestoreapi.get("/table-data");
    dispatch({ type: ActionTypes.FETCH_TABLE_ALL, payload: response.data });
};

export const fetchTableItem = (id: any) => async (dispatch: any) => {
    const response = await fakestoreapi.get(`/table-data/${id}`);
    dispatch({ type: ActionTypes.SELECTED_TABLE_ITEM, payload: response.data });
};

export const setTableAll = (items: any) => {
    return {
        type: ActionTypes.SET_TABLE_ALL,
        payload: items,
    };
};

export const selectedTableITem = (item: any) => {
    return {
        type: ActionTypes.SELECTED_TABLE_ITEM,
        payload: item,
    };
};

export const removeSelectedTableItem = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_TABLE_ITEM,
    };
};