import { QueryContext } from "@/context/queryResponseContext";
import { User } from "@/pages/UsersPage";
import { useContext } from "react";
export  function useQuery(){
    const queryContext = useContext(QueryContext)
    async function getUsers(username:string) {
        const users = queryContext.get(username)
        if(!users){
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`)
            const users = await response.json()
            queryContext.set(username,users)
            return users as User[]
        }
        else {
            return users
        }
    }
    return {getUsers}
}