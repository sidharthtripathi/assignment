import { User } from "@/pages/UsersPage";
import { useState, useEffect } from "react";
import { Input } from "./ui/input";

export default function Searchbar({
  setResults,
}: {
  setResults: React.Dispatch<React.SetStateAction<User[]>>;
}) {
  const [input, setInput] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  // Debounce input value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(input);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [input]);

  // Fetch users when debounced value changes
  useEffect(() => {
    const fetchUsers = async () => {
      if (debouncedValue.trim() === "") {
        setResults([]);
        return;
      }

      try {
        // Use the API's query parameter to filter by username
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${debouncedValue}`);
        const users: User[] = await response.json();
        setResults(users);
      } catch (error) {
        console.error("Error fetching users:", error);
        setResults([]);
      }
    };

    fetchUsers();
  }, [debouncedValue, setResults]);

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
