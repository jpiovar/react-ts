import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableItem, removeSelectedTableItem } from "../../../redux/actions/tableActions";

import { Component } from "react";

class TableItemComponent extends Component {
    render() {
        return (
            <div>
                table item component
                <TableItem/>
            </div>
        )
    }
}

export default TableItemComponent;




const TableItem = () => {
    debugger;
    const item = useSelector((state: any) => state.tableItem);
    const { id, firstname, surname, age } = item;
    const { itemId } = useParams<{ itemId: string }>();
    const dispatch = useDispatch();
    console.log(item);

    useEffect(() => {
        debugger;
        if (itemId && itemId !== "") dispatch(fetchTableItem(itemId));
        return () => {
            dispatch(removeSelectedTableItem());
        };
    }, [dispatch, itemId]);
    return (
        <div className="container">
            {Object.keys(item).length === 0 ? (
                <div>...Loading</div>
            ) : (
                <div className="container">
                    <h1>{id} {firstname} {surname} {age}</h1>
                </div>
            )}
        </div>
    );
};