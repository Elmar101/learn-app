import axios from "axios";
import { Users } from "../ecommerce-app/client/models/users";

export const fetchUserFromGithupApis =async ({ pageParam = 12}): Promise< Users[] > => {
    const { data } = await axios.get<Users[]>(`https://api.github.com/users?per_page=${pageParam}`)
    return data;
}