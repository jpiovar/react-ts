import { Component } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { TableItem } from "../../../redux/types/action-types-table";

const TableAllItems = () => {
    const items = useSelector((state: any) => state.allTableItems.items);

    console.log("Items: ", items);

    const renderList = items.map((item: TableItem, index: number) => {
        const { id, firstname, surname, age } = item;
        return (
            <tr key={index}>
                <td>{id}</td>
                <td>{firstname}</td>
                <td>{surname}</td>
                <td>{age}</td>
                <td><Link to={`/records/${id}`}>Click</Link></td>
            </tr>
        );
    });

    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList}
                </tbody>
            </table>
        </>
    );
};
class TableComponent extends Component {
    render() {
        return (
            <div>
                table component
                <TableAllItems />
            </div>
        )
    }
}

export default TableComponent;
