import styled from "styled-components";
import { FaRegPlusSquare } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";


const Container = styled.div`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;

    #table-controls {
        display: flex; 
        width: 80%;
        align-items: center;
    }

    button{
        width: 120px;
        height: auto;
        padding: 5px;
        margin-bottom: 5px;
        margin-right: 10px;
        /* border-radius: 3px; */

        svg { 
            vertical-align: middle;
        }
        p { 
            text-align: center; 
            font-size: 1rem;
            /* vertical-align: middle; */
        }
    }


    #edit-message {
        margin-bottom: 6px;
    }


    table {
        border-collapse: collapse;
        width: 100%;
    }

    thead {
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        font-size: 1.0rem;        
    }

    th {
        padding: 0 15px;
        font-size: 1.0rem;
        font-weight: 500;
        text-align: ${props => props.align || "center"};
        width: ${props => props.width || "auto"};        
    }

    td {
        font-size: 1.0rem;
        padding: 0 15px;
        text-align: ${props => props.align || "center"};
        width: ${props => props.width || "auto"};
        color: ${props => props.color || "#333333"};        
    }

    tr {
        border-bottom: ${props => props.bottom ? "1px solid #b4b4b4" : "none"};
        border-top: ${props => props.top ? "1px solid #b4b4b4" : "none"};
        height: ${props => props.height || "40px"};
        
        transition: all 0.1s ease-in-out;
        /* cursor: pointer; */

        background-color: #f5f5f5;
        /* &:hover {
            background-color: #f5f5f5;
        }         */
    }

    tbody tr {
        cursor: pointer;
    }
`;


// to sort by date
function sort_compare(a, b) {
    return b.date - a.date
};








const ActivityList = ( {route, user, activities, setActivities} ) => {


    // opens a form in a modal to update the activity
    const actionUpdate = async ( {activityItem, setActivities} ) => {
        console.log( '->ActivityList.actionUpdate()' );
    }; 


    // opens a form in a modal to create teh activity
    const actionCreate = async ( {setActivities} ) => {
        console.log( '->ActivityList.actionCreate' );
    };


    // asks for confirmation on delete and deletes the activity
    const actionDelete = async ( {activityItem, setActivities} ) => {
        console.log( '->ActivityList.actionDelete' );
    };


    const columns = [
        { name: 'Date',        align: 'center', width: '70px'  },
        { name: 'Distance',    align: 'center', width: '70px'  },
        { name: 'Time',        align: 'center', width: '100px' },
        { name: 'Pace',        align: 'center', width: '100px' },
        { name: 'Cal. burned', align: 'center', width: '100px' },
        { name: '%del%',       align: 'center', width: '100px' },
    ];

    return (

        <Container>
            {/* the button to add and instruction on editing */}
            <div id="table-controls">
                <button onClick={actionCreate}> 
                    <p><FaRegPlusSquare/> New activity</p>
                </button>
                <p id="edit-message"> To change - double-click on the desired row. </p>
            </div>
        
            {/* the table itself */}
            <table>

                {/* the header of the table */}
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} align={column.align} width={column.width}>
                            { column.name==="%del%"? <AiOutlineDelete /> : column.name }
                            </th>
                        ))}
                    </tr>
                </thead>

                {/* the list itself, the body */}
                <tbody>
                    {activities.sort(sort_compare)
                    .map((item, index) => (
                        <tr top key={index} onDoubleClick={() => actionUpdate(item, setActivities)}>
                            <td align="centre">{item.date}</td>
                            <td align="right">{item.distance} { route?.type_activity==='swim'?' meters':' km' }</td>
                            <td align="right">{item.time}</td>
                            <td align="right" color="#20C6EC">{item.pace}</td>
                            <td align="right">{item.cal_burned}</td>
                            <td align="centre" onClick={ () => actionDelete(item, setActivities) }>  </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        </Container>
    )
}

export default ActivityList;