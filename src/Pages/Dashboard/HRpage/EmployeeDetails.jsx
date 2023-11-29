import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const EmployeeDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const idString = String(id);

  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    },
  });

  const user = users.find((user) => String(user._id) === idString);

  console.log(user);

  const salaryData = [
    { month: 'Jan', salary: 2000 },
    { month: 'Feb', salary: 2500 },
    { month: 'Mar', salary: 3000 },
    { month: 'Apr', salary: 3500 },
    { month: 'May', salary: 4000 },
    { month: 'Jun', salary: 4500 },
  ];

  return (

    
    <div className="container mx-auto p-4">
      <SectionTitle
              
                heading={'User Details'}
            > </SectionTitle>

      {user ? (
        <>

        
          <div className="flex justify-center lg:space-x-8">
            <div className="lg">
              <div className="card card-side bg-base-100 shadow-xl">
                <figure className="lg:w-1/2 lg:h-auto lg:mr-4">
                  <img
                    src={user.registred_image || user.image}
                    alt="Movie"
                    className="w-full h-full object-cover"
                  />
                </figure>
               
                <div className="lg:flex lg:flex-col lg:space-y-4">
                <h2 className="text-2xl text-center">Details of : {user.name}</h2>
                
                <p className="text-lg">Designation: {user.designation}</p>
              </div>
              </div>
            </div>
            
          </div>

          {/* Bar Chart */}
          <div className="my-20 grid justify-center lg:space-x-8  px-20 ">
            <h3 className="text-2xl text-center gap-5">Salary vs. Month and Year</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salaryData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="salary" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
};

export default EmployeeDetails;
