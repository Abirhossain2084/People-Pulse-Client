import {  useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useWorksheet = () => {
    const axiosSecure = useAxiosSecure();

    const {user} =useAuth();

    const { refetch, data: worksheet = [] } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/worksheet`)
            return res.data;
        }

    })
    return [worksheet,refetch]
};

export default useWorksheet;