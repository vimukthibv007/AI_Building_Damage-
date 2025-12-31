import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.status);
      })
      .catch((err) => {
        console.error(err);
        setMessage("Backend not reachable");
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>AI Building Damage</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
