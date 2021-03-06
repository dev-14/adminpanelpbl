//import { format } from 'date-fns';
//import { ColumnFilter } from "./ColumnFilter";

export const COLUMNS = [
    {
        Header: 'Id',
        Footer: 'Id',
        accessor: 'id',
    },
    {
        Header: 'First Name',
        Footer: 'First Name',
        accessor: 'first_name',
    },
    {
        Header: 'Last Name',
        Footer: 'Last Name',
        accessor: 'last_name',
    },
    {
        Header: 'Id Card Number',
        Footer: 'Id Card Number',
        accessor: 'idNumber',
        //Cell: ({ value }) => { return format(new Date(value), 'dd/mm/yyyy')},
    },
    {
        Header: 'Contact number',
        Footer: 'Contact number',
        accessor: 'phone',
    },
    {
        Header: 'Parents Contact number',
        Footer: 'Parents Contact number',
        accessor: 'parentphone',
    },
    {
        Header: 'Address',
        Footer: 'Address',
        accessor: 'address',
    },
    {
        Header: 'Programming Languages Known',
        Footer: 'Programming Languages Known',
        accessor: 'languagesKnown',
    },
]
