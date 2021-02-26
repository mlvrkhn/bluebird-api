import React from 'react';
import { useSelector } from 'react-redux';

import StyledTable from './Table.styled';
import TableRow from '../TableRow';
import fields from '../../../tableFields';

function Table() {
    const brregRecords = useSelector((state) => state.results);

    const renderTableHeader = () =>
        fields.map((field, index) => <th key={index}>{field}</th>);

    const renderBrregRecords = () => {
        return brregRecords.map((company) => {
            const { orgNum, navn, email, website, bankrupt } = company;

            return (
                <TableRow key={orgNum}>
                    <td>{orgNum}</td>
                    <td>{navn}</td>
                    <td>{website}</td>
                    <td>{email}</td>
                    <td>{bankrupt ? 'True' : 'False'}</td>
                </TableRow>
            );
        });
    };

    return (
        <StyledTable>
            <thead>
                <tr
                    style={{
                        color: '#3DA395',
                        fontSize: '1.3em',
                    }}
                >
                    {renderTableHeader()}
                </tr>
            </thead>

            <tbody>{renderBrregRecords()}</tbody>
        </StyledTable>
    );
}

export default Table;
