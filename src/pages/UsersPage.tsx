import Searchbar from "@/components/Searchbar";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "@/types/types";
import { useState } from "react";
export default function UsersPage() {
  const [results, setResults] = useState<User[]>([]);
  return (
    <div className="container mx-auto">
      <Searchbar setResults={setResults} />
      <div className="mt-4">
        {results.map((result) => (
          <Card key={result.id}>
            <CardHeader>
              <CardTitle>{result.username}</CardTitle>
              <CardDescription>
               {result.name}
              </CardDescription>
            </CardHeader>
            <CardFooter>
              {result.email}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
