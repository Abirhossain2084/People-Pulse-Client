

const WorkSheetTable = ({ data }) => {
    console.log(data);
    return (
        <div className="overflow-x-auto bg-slate-300 rounded-lg my-10">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>

                        <th>Employee Name</th>
                        <th>Tasks</th>
                        <th>Date</th>
                        <th>hoursWorked</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.uname}</td>
                            <td>{item.tasks}</td>
                            <td>{item.date}</td>
                            <td>{item.hoursWorked
                            }</td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </div>
    );
};

export default WorkSheetTable;
