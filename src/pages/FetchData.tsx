// Q4: Fetch Data with Loading, Error & Retry
// Build your solution here

import { useEffect, useState } from "react";

export default function FetchData() {
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const json = await res.json();
      setData(json);
    } catch {
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="fetch-container">
      {loading && (
        <div className="fetch-loading">
          <div className="spinner" />
          <p>Loading...</p>
        </div>
      )}

      {error && !loading && (
        <div className="fetch-error">
          <p className="fetch-error-text">{error}</p>
          <button className="todo-add-btn" onClick={fetchData}>Retry</button>
        </div>
      )}

      {!loading && !error && data.length > 0 && (
        <ul className="todo-list">
          {data.map((user: any) => (
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
    </div>
  );
}
