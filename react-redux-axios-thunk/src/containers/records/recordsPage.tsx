import { Component,
    //  useEffect 
} from "react";
// import { useDispatch } from "react-redux";
// import { fetchTableAll } from "../../redux/actions/tableActions";
import TableComponent from "./components/table";

// const TableAll = () => {
//     const items = useSelector((state) => state);
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(fetchTableAll());
//     }, [dispatch]);
//     console.log("Table items: ", items);
//     return (
//         <div className="ui grid container">
//             <TableComponent />
//         </div>
//     );
// };

// function TableAllItemsFetch() { // Rule 2: call hooks in function component
//     debugger;
//     // const items = useSelector((state: any) => state.allTableItems.items); // Rule 1: call hooks in top-level
//     const dispatch = useDispatch();

//     useEffect(() => {
//         debugger;
//         dispatch(fetchTableAll());
//         // console.log("Table all items: ", items);
//     }, [dispatch]);
//     return <></>
// }

class RecordsPage extends Component {

    render() {
        debugger;
        return (
            <>
            {/* <TableAllItemsFetch/> */}
                <TableComponent/>
            </>
        )
    }
}

export default RecordsPage;
