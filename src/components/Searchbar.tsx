import { User } from "@/pages/UsersPage";
import { useState } from "react";

export default function Searchbar({users,setResults } :{users: User[],setResults : React.Dispatch<React.SetStateAction<User[]>>} ){
 const [input, setInput] = useState<string>("");


    return (
        <input
        type="text"
        value={input}
        onChange={(e) => {
        const query = e.target.value.toLowerCase()
          setInput(query);
          const searchResult = users.filter(user=>user.username.toLowerCase().includes(query))
          setResults(searchResult)
        }}
      />
    )
}