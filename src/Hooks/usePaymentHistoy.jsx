import {  useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const usePaymentHistoy = () => {
    const axiosSecure = useAxiosSecure();

    const {user} =useAuth();

    const { refetch, data: paymenthistory = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/paymenthistory`)
            return res.data;
        }

    })
    return [paymenthistory,refetch]
};

export default usePaymentHistoy;