import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState(null);

  useEffect(() => {
    async function fetchTitle() {
      try {
        const res = await fetch("http://localhost:5000/titles");
        const data = await res.json();
        console.log("Fetched title:", data);
        setTitle(data.title);
      } catch (err) {
        console.error("Failed to fetch title:", err);
      }
    }

    fetchTitle();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title ? title : "Loading..."}</h1>
      </header>
    </div>
  );
}

export default App;
