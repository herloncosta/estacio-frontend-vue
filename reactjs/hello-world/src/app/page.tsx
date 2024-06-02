"use client";

import { useEffect, useState } from "react";
import { Counter } from "./components/counter";

export default function Home() {
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => setTime(new Date().toLocaleString()), 1000);
  }, []);

  return (
    <main className="">
      <h1>Bem vindo, ao React!</h1>
      <p>Aqui, você pode testar suas aplicações!</p>
      <p>Agora são: {time}</p>

      <Counter />
    </main>
  );
}
