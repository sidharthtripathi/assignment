import Searchbar from "@/components/Searchbar";
import { useState } from "react";
export type User = {
  id: number;
  name: string;
  email: string;
  username: string;
};
export default function UsersPage() {
  const [results, setResults] = useState<User[]>([]);
  return (
    <div>
      <Searchbar setResults={setResults} />
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.username}</li>
        ))}
      </ul>
    </div>
  );
}
