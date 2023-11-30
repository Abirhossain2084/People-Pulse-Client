import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";


const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymenthistory`)
            return res.data;
        }
    })

    console.log(payments);

    return (
       <div>
        <SectionTitle
        subheading={'All payment history'}
        heading={'Payments'}
        >

        </SectionTitle>
         <div className="  bg-gradient-to-r from-indigo-500  to-[#4F6F52] ... rounded-lg">
            <h2 className="text3-xl text-center font-bold text-2xl">Total Payments: {payments.length}</h2>
            <div className="overflow-x-auto  rounded-lg">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                            <th>Month</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment, index) => <tr key={payment._id}>
                            <th>{index + 1}</th>
                            <td>${payment.uemail}</td>
                            <td>${payment.amount}</td>
                            <td>{payment.userId}</td>
                            <td>{payment.month}</td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
       </div>
    );
};

export default PaymentHistory;