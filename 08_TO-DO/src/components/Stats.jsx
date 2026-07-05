
import React from 'react'

const Stats = ({pendingTodos,totalTodos,completedTodos}) => {
    return (
        <>
            <table  border={1}>
                <thead>
                    <tr>
                        <th>Pending task</th>
                        <th>Completed Task</th>
                        <th>Total Task</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{pendingTodos}</td>
                        <td>{completedTodos}</td>
                        <td>{totalTodos}</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Stats
