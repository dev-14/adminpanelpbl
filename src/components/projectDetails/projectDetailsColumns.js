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
        Header: 'Title',
        Footer: 'Title',
        accessor: 'title',
    },
    {
        Header: 'Role',
        Footer: 'Role',
        accessor: 'role',
    },
    {
        Header: 'Mentor',
        Footer: 'Mentor',
        accessor: 'mentor',
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
        Header: 'Funded',
        Footer: 'Funded',
        accessor: 'funded',
    },
    {
        Header: 'Investor',
        Footer: 'Investor',
        accessor: 'investor',
    },
    {
        Header: 'Skills Developed',
        Footer: 'Skills Developed',
        accessor: 'skillsDeveloped',
    },
    {
        Header: 'Certificate',
        Footer: 'Certificate',
        accessor: 'certificate',
    },
]
