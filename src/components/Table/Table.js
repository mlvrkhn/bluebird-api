import React from 'react';
import StyledTable from './Table.styled';

function Table() {
    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Organisasjonsnummer</th>
                    <th>Navn</th>
                    <th>Hjemmeside</th>
                    <th>Email</th>
                    <th>Konkurs</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Firma I</td>
                    <td>Firma II </td>
                </tr>
                <tr>
                    <td>Firma I</td>
                    <td>Firma II </td>
                    <td>Firma II </td>
                    <td>Firma II </td>
                    <td>Firma II </td>
                    <td>Firma II </td>
                </tr>
            </tbody>
        </StyledTable>
    );
}

export default Table;
