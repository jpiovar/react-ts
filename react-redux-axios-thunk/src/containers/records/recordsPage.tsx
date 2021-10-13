import { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableAll } from "../../redux/actions/tableActions";
import TableComponent from "./components/table";

const TableAll = () => {
    const items = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTableAll());
    }, [dispatch]);
    console.log("Table items: ", items);
    return (
        <div className="ui grid container">
            <TableComponent />
        </div>
    );
};

// function TableAllItems() { // Rule 2: call hooks in function component
//     debugger;
//     const items = useSelector((state: any) => state.allTableItems.items); // Rule 1: call hooks in top-level
//     const dispatch = useDispatch();

//     useEffect(() => {
//         debugger;
//         dispatch(fetchTableAll());
//         console.log("Table all items: ", items);
//     }, [dispatch, items]);


//     return <>{items}</>
// }

class RecordsPage extends Component {

    renderTable() {
        debugger;
        // return <TableAllItems />
        return <TableAll />;
    }

    render() {
        debugger;
        return (
            // <>{this.renderTable()}</>
            <TableAll/>
        )
    }
}

export default RecordsPage;
