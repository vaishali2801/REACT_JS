import React from 'react'

const StudentList = ({  studentData,index}) => {
    return (
        <>
            <tr >
                <td>{index + 1}</td>
                <td>{studentData.firstName}</td>
                <td>{studentData.lastName}</td>
                <td>{studentData.email}</td>
                <td>{studentData.phoneNumber}</td>
                <td>{studentData.course}</td>
            </tr>
        </>
    )
}

export default StudentList
