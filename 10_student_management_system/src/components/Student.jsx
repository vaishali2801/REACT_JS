import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { getStudent } from '../APi/StudentFetch';
import Alert from 'react-bootstrap/Alert';
import Table from "react-bootstrap/Table";
import StudentList from "../components/StudentList";

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

      console.log(data);
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
  if (error) {
  return (
    <Alert variant="danger">
      <h4>{error}</h4>
    </Alert>
  );
}
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>email</th>
            <th>phoneNumber</th>
            <th>branch</th>
            <th>course</th>
          </tr>
        </thead>
        <tbody>
          {
            studentData.map((s,index)=>{
              return(
                <StudentList index={index} studentData={s} key={s._id}/>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default Student;
