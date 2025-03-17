import Searchbar from "@/components/Searchbar";
import { useDebounce } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};
export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading,setLoading] = useState(true)
  
  const [results, setResults] = useState<User[]>([]);
  const debouncedSearchResults = useDebounce(results, 500);

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = (await response.json()) as User[];
      setUsers(users);
      setResults(users);
      setLoading(false)
    }
    fetchUsers();
  }, []);
  return (
    <div>
      <Searchbar setResults={setResults} users={users} />
      {loading ? <p>Loading...</p> : <ul>
        {debouncedSearchResults.map((result) => (
          <li key={result.id}>{result.username}</li>
        ))}
      </ul> }
      
    </div>
  );
}
