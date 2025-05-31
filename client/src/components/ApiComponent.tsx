import React, { useEffect, useState } from "react";

const ApiComponent: React.FC = () => {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    fetch("/api/example")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch(() => setMessage("Error fetching data"));
  }, []);

  return (
    <div>
      <h2>API Response:</h2>
      <p>{message}</p>
    </div>
  );
};

export default ApiComponent;
