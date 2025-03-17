import { User } from "@/types/types";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import {useDebounce} from '@uidotdev/usehooks'
import { useQuery } from "@/hooks/useQuery";
export default function Searchbar({
  setResults,
}: {
  setResults: React.Dispatch<React.SetStateAction<User[]>>;
}) {
  const {getUsers} = useQuery()
  const [input, setInput] = useState<string>("");
  const debouncedInput = useDebounce(input,500)

  // Debounce input value
  useEffect(() => {
    if(!debouncedInput.length) return;
    async function fetchUsers(username:string) {
        const users = await getUsers(username)
        setResults(users);
    }
    fetchUsers(debouncedInput)
  }, [debouncedInput]);

  
  return (
    <Input
      className="mt-2"
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
