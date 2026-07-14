import React from "react";

const Dummy = () => {
    const studentList = [
        {
            name: "Bhoomi",
            email: "bhoomi@gmail.com",
            password: "12345678",
        },
        {
            name: "Darshan",
            email: "darshan@gmail.com",
            password: "12345678",
        },
        {
            name: "Yagnik",
            email: "yagnik@gmail.com",
            password: "12345678",
        },
    ];

    return (
        <>
            <h2>Student List</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                    </tr>
                </thead>

                <tbody>
                    {studentList.map((s, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>{s.password}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default Dummy;