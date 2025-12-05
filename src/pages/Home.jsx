import React, { useState, useEffect } from "react";

function Home() {
  const [message, setMessage] = useState("Welcome to Home Page!");

  useEffect(() => {
    console.log("Home Page Loaded");
  }, []);

  return <h1>{message}</h1>;
}

export default Home;
