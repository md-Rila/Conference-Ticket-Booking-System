import React from 'react'
import Table from 'react-bootstrap/Table'
import './Conference.css'
function Conference({ title, city, available }) {
    return (
        <div className="conference" >
            <Table striped bordered hover variant="dark">
                    <tr>
                        <td>{title}</td>
                        <td>{city}</td>
                        <td>{available}</td>
                    </tr>
            </Table>
        </div>
    )
}

export default Conference
