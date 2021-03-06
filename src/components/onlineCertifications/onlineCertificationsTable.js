import React, { Component, useMemo } from 'react';
import { useTable, useGlobalFilter, useFilters, useSortBy } from "react-table";
import MOCK_DATA from "./MOCK_DATA_onlineCertification.json";
import { COLUMNS } from "./onlineCertificationColumns";
import '../table.css'
import { GlobalFilter } from "../GlobalFilter";
import { Sidebar } from '../Sidebar/SidebarComponent'
// import { ColumnFilter } from './ColumnFilter';


export class OnlineCertificationsTable extends Component {
    render() {
        return(
            <Filtering />
        );
    }
}

export const Filtering = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    // const defaultColumn = useMemo(() => {
    //     return{
    //         Filter: ColumnFilter
    //     }
    // }, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    } = useTable({
        columns,
        data,
        //defaultColumn
    },
    useFilters,
    useGlobalFilter,
    useSortBy,)

    const { globalFilter } = state

    return (
        <div>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps()}>
            <thead>
                {
                    headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' ^ ' : ' v ') : ''}
                                        </span>
                                    </th>
                                ))
                            }

                        </tr>
                    ))
                }

            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {
                                row.cells.map((cell) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                })
                            }
                            
                        </tr>
                    );
                })}

            </tbody>
            <tfoot>
                {
                    footerGroups.map(footerGroup => (
                        <tr {...footerGroup.getFooterGroupProps()}>
                            {
                                footerGroup.headers.map(column => (
                                    <td {...column.getFooterProps()}>
                                        {
                                            column.render('Footer')
                                        }
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tfoot>
        </table>
        </div>
    );
}