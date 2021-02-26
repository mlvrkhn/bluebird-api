import React from 'react';
import StyledTable from './Table.styled';
import TableRow from '../TableRow';

import fields from '../../../tableFields';

function Table() {
    const renderTableHeader = () =>
        fields.map((field, index) => <th key={index}>{field}</th>);

    return (
        <StyledTable>
            <thead>
                <tr
                    style={{
                        color: '#3DA395',
                        fontSize: '1.1em',
                    }}
                >
                    {renderTableHeader()}
                </tr>
            </thead>

            <tbody>
                <TableRow>
                    <td>Firma I</td>
                </TableRow>
                <TableRow>
                    <td>999 888 777</td>
                    <td>Firma II</td>
                    <td>www.firmaii.no</td>
                    <td>firma@jp.com</td>
                    <td>JA / NEI</td>
                </TableRow>
            </tbody>
        </StyledTable>
    );
}

export default Table;
