import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useWorksheet from '../../../../Hooks/useWorksheet';
import useAuth from '../../../../Hooks/useAuth';

const WorkSheet = () => {
    const { handleSubmit, control, setValue, reset } = useForm();
    const [workList, setWorkList] = React.useState([]); // Initialize workList state
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // console.log(user.email);


    const [worksheet, refetch] = useWorksheet();
    console.log(worksheet);

    const onSubmit = async (data) => {
        // Update workList with the latest entry
        setWorkList((prevWorkList) => [
            {
                tasks: data.tasks,
                hoursWorked: data.hoursWorked,
                date: data.date.toLocaleDateString(),
                uname: user.displayName,
                uemail: user.email
            },
            ...prevWorkList,
        ]);

        // Clear the form fields
        reset();

        // Construct the menuItem object
        const menuItem = {
            tasks: data.tasks,
            hoursWorked: data.hoursWorked,
            date: data.date.toISOString(), // Convert date to ISO format
            uname: user.displayName,
            uemail: user.email

        };

        try {
            // Send the menu item data to the server with the image URL
            const menuRes = await axiosSecure.post('/worksheet', menuItem);
            console.log(menuRes.data);

            if (menuRes.data.insertedId) {
                // Show success popup
                reset();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${data.tasks} is added to the worksheet.`,
                    showConfirmButton: false,
                    timer: 1500,
                });
                refetch();
            }
        } catch (error) {
            // Handle errors
            console.error('Error adding item to worksheet:', error);
        }
    };
    return (
        <div className="container  mx-auto p-4 bg-gradient-to-r from-indigo-500  to-[#4F6F52] ...">
            <h2 className="text-2xl font-bold mb-4">Work Sheet</h2>

            {/* Form */}
            <form

                onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center bg-slate-300  gap-4 rounded-md my-10 px-2 py-2">
                <div className=''>
                    <label className="block">Tasks</label>
                    <Controller
                        name="tasks"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <select className="border p-2" {...field}>
                                <option value="">Select Task</option>
                                <option value="Sales">Sales</option>
                                <option value="Support">Support</option>
                                <option value="Content">Content</option>
                                <option value="Paper-work">Paper-work</option>
                                {/* Add more options if needed */}
                            </select>
                        )}
                    />
                </div>

                <div className=''>
                    <label className="block">Hours Worked</label>
                    <Controller
                        name="hoursWorked"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input type="number" className="border p-2" {...field} />
                        )}
                    />
                </div>

                <div>
                    <label className="block">Date</label>
                    <Controller
                        name="date"
                        control={control}
                        defaultValue={new Date()}
                        render={({ field }) => (
                            <DatePicker
                                selected={field.value}
                                onChange={(date) => {
                                    setValue('date', date);
                                }}
                            />
                        )}
                    />
                </div>

                <div>
                    <button className="bg-[#4F6F52] text-white p-2 rounded" type="submit">
                        Submit
                    </button>
                </div>
            </form>

            {/* Table */}
            <table className="w-full  border-collapse border bg-gray-500 text-white">
                <thead>
                    <tr className=" text-black bg-[#4F6F52]">
                        <th className="p-2 border">Tasks</th>
                        <th className="p-2 border">Hours Worked</th>
                        <th className="p-2 border">Date</th>
                        <th className="p-2 border">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {worksheet.map((work, index) => (
                        <tr key={index}>
                            <td className="p-2 border">{work.tasks}</td>
                            <td className="p-2 border">{work.hoursWorked}</td>
                            <td className="p-2 border">{work.date}</td>
                            <td className="p-2 border">{work.uemail}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default WorkSheet;
