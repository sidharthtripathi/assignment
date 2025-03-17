import { User } from "@/pages/UsersPage";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import {useDebounce} from '@uidotdev/usehooks'
export default function Searchbar({
  setResults,
}: {
  setResults: React.Dispatch<React.SetStateAction<User[]>>;
}) {
  const [input, setInput] = useState<string>("");
  const debouncedInput = useDebounce(input,500)

  // Debounce input value
  useEffect(() => {
    async function fetchUsers(username:string) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
        const users: User[] = await response.json();
        setResults(users);
    }
    fetchUsers(debouncedInput)
  }, [debouncedInput]);

  
  return (
    <Input
      placeholder="Search by username"
      type="text"
      value={input}
      onChange={(e) => {
        const query = e.target.value;
        setInput(query);
      }}
    />
  );
}
