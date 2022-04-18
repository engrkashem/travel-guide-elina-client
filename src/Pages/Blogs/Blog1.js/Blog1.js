import React from 'react';
import { Table } from 'react-bootstrap';

const Blog1 = () => {
    return (
        <Table striped bordered hover variant="dark opacity-75">
            <thead>
                <tr>
                    <th>SL </th>
                    <th>Authentication</th>
                    <th>Authorization</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Authentication demonstrates who the user is?</td>
                    <td>Authorization settle or provide permission to what resources a user can access.</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Authentication works via email links, passwords, one-time pins, biometric information or other information that the user provided.</td>
                    <td>Authorization works via permossion settings that are executed and maintained by the organization.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td >It is the first step of a good recognition and access management process</td>
                    <td>It always come to pass after authentication.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td >It is transparent to and moderately changeable by the user.</td>
                    <td>It is completely out of reach to the user.</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td >Example: By authenticating employee identity, they get permission to an account data access.</td>
                    <td>Example: Once their level of access is authorized, employees and A/C managers can access various levels of data based on the permissions executed by the organization.</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default Blog1;