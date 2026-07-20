import React from 'react'
import { Button } from 'react-bootstrap'

const StudentList = ({  studentData,index,handleDelete}) => {
    return (
        <>
            <tr >
                <td>{index + 1}</td>
                <td>{studentData.firstName}</td>
                <td>{studentData.lastName}</td>
                <td>{studentData.email}</td>
                <td>{studentData.phoneNumber}</td>
                <td>{studentData.course}</td>
                {/* <td>{<Button variant="warning" onClick={()=>handleDelete(studentData._id)}>Edit</Button>}</td> */}
                {/* <td>{<Button variant="danger" onClick={()=>handleDelete(studentData._id)}>Delete</Button>}</td> */}
            </tr>
        </>
    )
}

export default StudentList;
