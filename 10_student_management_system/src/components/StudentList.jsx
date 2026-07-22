import React from 'react'
import { Button } from 'react-bootstrap'
import { DeleteStudent } from '../APi/StudentFetch';
import { useNavigate } from "react-router-dom";

const StudentList = ({ studentData, index }) => {

    const navigate = useNavigate();

    const handleDelete = () => {
        DeleteStudent(studentData._id);

        alert("student Deleted");
    };
    const handleEdit = () =>{
        navigate("/editStudent", { state: studentData });
    }
    return (
        <>
            <tr >
                <td>{index + 1}</td>
                <td>{studentData.firstName}</td>
                <td>{studentData.lastName}</td>
                <td>{studentData.email}</td>
                <td>{studentData.phoneNumber}</td>
                <td>{studentData.course}</td>
                <td>{<Button variant="warning" onClick={handleEdit}>Edit</Button>}</td>
                <td>{<Button variant="danger" onClick={handleDelete}>Delete</Button>}</td>
            </tr>
        </>
    )
}

export default StudentList;
