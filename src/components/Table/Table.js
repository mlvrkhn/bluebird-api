import React from 'react';
import { useSelector } from 'react-redux';

import StyledTable from './Table.styled';
import TableRow from '../TableRow';
import fields from '../../../tableFields';
import Cell from '../Cell/Cell';

function Table() {
    const brregRecords = useSelector((state) => state.results);

    const renderTableHeader = () =>
        fields.map((field, index) => (
            <th
                style={{
                    height: '50px',
                    paddingBottom: '20px',
                    textAlign: 'left',
                }}
                key={index}
            >
                {field}
            </th>
        ));

    const renderBrregRecords = () => {
        return brregRecords.map((company) => {
            const { orgNum, navn, email, website, bankrupt } = company;

            return (
                <TableRow key={orgNum}>
                    <Cell>{orgNum}</Cell>
                    <Cell>{navn}</Cell>
                    <Cell>{website}</Cell>
                    <Cell>
                        <a href='#'>{email}</a>
                    </Cell>
                    <Cell>{bankrupt ? 'True' : 'False'}</Cell>
                </TableRow>
            );
        });
    };

    return (
        <StyledTable>
            <thead
                style={{
                    marginBottom: '20px',
                }}
            >
                <tr
                    style={{
                        color: '#3DA395',
                        fontSize: '1.3em',
                        marginBottom: '20px',
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
