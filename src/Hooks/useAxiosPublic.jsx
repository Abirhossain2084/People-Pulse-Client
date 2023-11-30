import axios from "axios";

const axiosPublic = axios.create({
    baseURL:'https://people-pulse-server.vercel.app'
})

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;