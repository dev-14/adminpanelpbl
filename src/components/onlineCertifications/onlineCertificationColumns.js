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
        Header: 'Done During Semester',
        Footer: 'Done During Semester',
        accessor: 'semester',
        //Cell: ({ value }) => { return format(new Date(value), 'dd/mm/yyyy')},
    },
    {
        Header: 'Platform',
        Footer: 'Platform',
        accessor: 'platform',
    },
    {
        Header: 'Domain',
        Footer: 'Domain',
        accessor: 'domain',
    },
    {
        Header: 'Title',
        Footer: 'Title',
        accessor: 'title',
    },
    {
        Header: 'From',
        Footer: 'From',
        accessor: 'from',
    },
    {
        Header: 'To',
        Footer: 'To',
        accessor: 'to',
    },
    {
        Header: 'Certificate',
        Footer: 'Certificate',
        accessor: 'certificate',
    },
]
