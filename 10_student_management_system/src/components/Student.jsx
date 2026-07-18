
//Hook
import React, { useEffect, useState } from 'react';

//react-bootstrap
import { Alert, Table, Spinner } from "react-bootstrap";

//api
import { getStudent } from '../APi/StudentFetch';
// import { getStudent } from '../APi/StudentAxios';

//component
import StudentList from "../components/StudentList";


const Student = () => {
  const [studentData, setStudentData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      setLoading(true);
      setError("");
      const data = await getStudent();

      console.log("data", data);
      setStudentData(data);

    } catch (err) {
      console.error(err);
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  // if (error) {
  //   return (
  //     <Alert variant="danger" style={{ color: "red" }}>
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
        <p>Total Students : {studentData.length}</p>
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
          </tr>
        </thead>

        <tbody>
          {studentData.map((s, index) => (
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
