export const ActionTypes = {
    FETCH_TABLE_ALL: "FETCH_TABLE_ALL",
    SET_TABLE_ALL: "SET_TABLE_ALL",
    SELECTED_TABLE_ITEM: "SELECTED_TABLE_ITEM",
    REMOVE_SELECTED_TABLE_ITEM: "REMOVE_SELECTED_TABLE_ITEM",
};

export type TableItem = {
    id: string,
    firstname: string,
    surname: string,
    age: number
}
export interface Table {
    items: TableItem[],
    loading: boolean,
    error: any
}