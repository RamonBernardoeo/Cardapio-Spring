import axios, { AxiosPromise } from "axios"
import { foodData } from "../components/interface/FoodData"
import { useMutation, useQuery, useQueryClient } from "react-query"


const API_URL = 'http://localhost:8080'


const postData = async (data: foodData): Promise<any> =>{
    const response =  await axios.post(API_URL + '/food', data)
    return response.data
}

export function useFoodDataMutate(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: ()=> {
            queryClient.invalidateQueries(['food-data'])
        }
    })
    return mutate
}