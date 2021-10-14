import {
    Component,
    // useEffect 
} from "react";
import {
    connect,
    // useDispatch, useSelector 
} from "react-redux";
import { Link } from "react-router-dom";
import { fetchTableAll } from "../../../redux/actions/tableActions";
import { TableItem } from "../../../redux/types/action-types-table";

/*
const TableAllItems = () => {
    const items = useSelector((state: any) => state.allTableItems.items);
    const dispatch = useDispatch();

    useEffect(() => {
        debugger;
        dispatch(fetchTableAll());
        // console.log("Table all items: ", items);
    }, [dispatch]);

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
*/

interface TableAllInterface {
    allTableItems: any;
    fetchTableAll: any;
}

class TableAllItemsComponent extends Component<TableAllInterface> {
    // renderList: any = [];

    constructor(props: TableAllInterface) {
        super(props);
        debugger;
        this.props.fetchTableAll(); // dispatch(fetchTableAll())
        // const items = [{
        //     id: 'id1', firstname: 'janko', surname: 'hrasko', age: 19
        // }];
        // setTimeout(() => {
        //     this.renderList = this.props.allTableItems.items.map((item: TableItem, index: number) => {
        //         const { id, firstname, surname, age } = item;
        //         return (
        //             <tr key={index}>
        //                 <td>{id}</td>
        //                 <td>{firstname}</td>
        //                 <td>{surname}</td>
        //                 <td>{age}</td>
        //                 <td><Link to={`/records/${id}`}>Click</Link></td>
        //             </tr>
        //         );
        //     });
        // }, 0);
    }

    // componentDidMount() {
    //     this.props.fetchTableAll();
    //     setTimeout(() => {
    //         this.renderList = this.props.allTableItems.items.map((item: TableItem, index: number) => {
    //             const { id, firstname, surname, age } = item;
    //             return (
    //                 <tr key={index}>
    //                     <td>{id}</td>
    //                     <td>{firstname}</td>
    //                     <td>{surname}</td>
    //                     <td>{age}</td>
    //                     <td><Link to={`/records/${id}`}>Click</Link></td>
    //                 </tr>
    //             );
    //         });
    //     }, 0);
    // }

    render() {
        // const items = [{
        //     id: 'id1', firstname: 'janko', surname: 'hrasko', age: 19
        // }];
        const renderList = this.props.allTableItems.items.map((item: TableItem, index: number) => {
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
        )
    }
}

// TableAllItemsComponent
type PropsTableAllItemsComponentConnected = {
    hi: string
}

const mapStateToProps = (state: any) => ({
    allTableItems: state.allTableItems
});

const mapDispatchToProps = {
    fetchTableAll
};

const TableAllItemsComponentConnected = connect(
    mapStateToProps,
    mapDispatchToProps,
    
)(TableAllItemsComponent);



type PropsTableComponent = {
    hello: string;
};

class TableComponent extends Component<PropsTableComponent> {
    render() {
        const hello = this.props.hello;
        return (
            <div>
                table component {hello}
                {/* <TableAllItems /> */}
                <TableAllItemsComponentConnected 
                // hi={hello}
                />
            </div>
        )
    }
}

export default TableComponent;
