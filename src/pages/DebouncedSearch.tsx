// Q2: Debounced Search Input (API Call)
// Build your solution here

import { useEffect, useState } from "react";

export default function DebouncedSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchValue.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    const timer = setTimeout(async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        const filtered = data.filter((user: any) =>
          user.name.toLowerCase().includes(searchValue.toLowerCase()),
        );
        setResults(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="search-container">
      <div className="search-input-row">
        <input
          className="todo-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search users by name..."
        />
      </div>

      {loading && <p className="search-status">Searching...</p>}

      {!loading && results.length > 0 && (
        <ul className="todo-list">
          {results.map((user: any) => (
            <li key={user.id} className="todo-item">
              <span className="todo-text">
                <strong>{user.name}</strong>
                <span className="search-meta">{user.email}</span>
              </span>
              <span className="search-phone">{user.phone}</span>
            </li>
          ))}
        </ul>
      )}

      {!loading && searchValue && results.length === 0 && (
        <p className="search-status">No results found for "{searchValue}"</p>
      )}

      {!searchValue && (
        <p className="search-status">Type to search from 10 users...</p>
      )}

    </div>
  );
}
