import  { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
 // Import your useAxiosSecure hook
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import WorkSheetTable from './WorkSheetTable ';



const EmployeeProgress = () => {
    const axiosSecure = useAxiosSecure();
  
    // Fetch the list of employees for the dropdown
    const { data: employeeList = [] } = useQuery({
      queryKey: ['employees'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      },
    });
  
    // State for selected employee and month
    const [selectedEmployee, setSelectedEmployee] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
  
    // Fetch the data for the table based on selected filters
    const { data: tableData = [] } = useQuery({
      queryKey: ['tableData', selectedEmployee, selectedMonth],
      queryFn: async () => {
        const res = await axiosSecure.get('/worksheet', {
          params: { uname: selectedEmployee, date: selectedMonth },
        });
        return res.data;
      },
    });
  
    // Update data when filters change
    useEffect(() => {
      // Refetch the table data when filters change
      // This will trigger a new request to the server with updated filters
      // refetch();
    }, [selectedEmployee, selectedMonth]);
  
    const filterByMonth = (dateString) => {
      const date = new Date(dateString);
      const month = date.getMonth() + 1; // JavaScript months are 0-indexed
      return month.toString().padStart(2, '0');
    };
  
    const filteredTableData = tableData.filter((item) => {
      const tableMonth = filterByMonth(item.date);
      const selectedMonthFormatted = selectedMonth.padStart(2, '0');
      return selectedMonth === '' || tableMonth === selectedMonthFormatted;
    });
  
    return (
      <div className='bg-slate-500 text-black font-bold rounded-lg'>
        <h2 className='text-center my-8 text-2xl'> Progress Page</h2>
  
        {/* Employee Dropdown */}
        <label>Select Employee:</label>
        <select
          value={selectedEmployee}
          onChange={(e) => setSelectedEmployee(e.target.value)}
        >
          <option value="">All Employees</option>
          {employeeList.map((employee) => (
            <option key={employee.id} value={employee.id}>
              {employee.name}
            </option>
          ))}
        </select>
  
        {/* Month Dropdown */}
        <label>Select Month:</label>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
        >
          {/* Add your month options here */}
          <option value="">All Months</option>
          {/* ... */}
        </select>
  
        {/* Display the table with filtered data */}
        <WorkSheetTable data={filteredTableData} />
      </div>
    );
  };
  
  export default EmployeeProgress;
  
