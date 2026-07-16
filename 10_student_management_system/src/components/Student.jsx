import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { getStudent } from '../APi/StudentFetch';
import Alert from 'react-bootstrap/Alert';
import Table from "react-bootstrap/Table";
import StudentList from "../components/StudentList";
// import { getStudentByAxios } from '../APi/StudentAxios';

// import Dummy from "../utils/Dummy";

const Student = () => {
  const [studentData, setStudentData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);
  useEffect(() => {
    LoadData();
  }, []);
  async function LoadData(params) {
    try {
      setLoading(true);
      setError("");
      const data = await getStudent();
      // const data = await getStudentByAxios();

      console.log("data",data);
      setStudentData(data);
    } catch (error) {
      setError("something went wrong");
    } finally {
      setLoading(false);
    }
  }
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
  }
//   if (error) {
//   return (
//     <Alert variant="danger" style={{color:"red"}}>
//       <h4>{error}</h4>
//     </Alert>
//   );
// }
  return (
    <div className="student-container">

    <h1 className="page-title">
      Student Management System
    </h1>

    <div className="total-box">
      <h2>{studentData.length}</h2>
      <p>Total Students</p>
    </div>

    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Branch</th>
          <th>Course</th>
        </tr>
      </thead>

      <tbody>
        {studentData.map((s,index)=>(
          <StudentList
            key={s._id}
            studentData={s}
            index={index}
          />
        ))}
      </tbody>
    </Table>
  </div>
  )
}

export default Student;
