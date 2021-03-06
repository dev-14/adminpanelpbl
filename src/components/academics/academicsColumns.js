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
        Header: 'School',
        Footer: 'School',
        accessor: 'school',
        //Cell: ({ value }) => { return format(new Date(value), 'dd/mm/yyyy')},
    },
    {
        Header: 'SSC Aggregate',
        Footer: 'SSC Aggregate',
        accessor: 'ssc_agg',
    },
    {
        Header: 'Junior College',
        Footer: 'Junior College',
        accessor: 'jr_coll',
    },
    {
        Header: 'HSC Aggregate',
        Footer: 'HSC Aggregate',
        accessor: 'hsc_agg',
    },
    {
        Header: 'Department',
        Footer: 'Department',
        accessor: 'department',
    },
    {
        Header: 'Current Semester',
        Footer: 'Current Semester',
        accessor: 'current_semester',
    },
    {
        Header: 'Sem 1 GPA',
        Footer: 'Sem 1 GPA',
        accessor: 'sem1_gpa',
    },
    {
        Header: 'Sem 2 GPA',
        Footer: 'Sem 2 GPA',
        accessor: 'sem2_gpa',
    },
    {
        Header: 'Sem 3 GPA',
        Footer: 'Sem 3 GPA',
        accessor: 'sem3_gpa',
    },
    {
        Header: 'Sem 4 GPA',
        Footer: 'Sem 4 GPA',
        accessor: 'sem4_gpa',
    },
    {
        Header: 'Sem 5 GPA',
        Footer: 'Sem 5 GPA',
        accessor: 'sem5_gpa',
    },
    {
        Header: 'Sem 6 GPA',
        Footer: 'Sem 6 GPA',
        accessor: 'sem6_gpa',
    },
    {
        Header: 'Sem 7 GPA',
        Footer: 'Sem 7 GPA',
        accessor: 'sem7_gpa',
    },
    {
        Header: 'Sem 8 GPA',
        Footer: 'Sem 8 GPA',
        accessor: 'sem8_gpa',
    },
    {
        Header: 'Field of Interest',
        Footer: 'Field of Interest',
        accessor: 'interests',
    },
]
