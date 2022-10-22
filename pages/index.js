import { useEffect } from "react";
import { Layout } from "../components/layout/Layout";

const fetchUser = async () => {
  const response = await fetch(`/api/hello`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }

  const user = await response.json();
  return user;
};

export default function Home() {
  useEffect(() => {
    console.log(fetchUser());
  }, []);
  return <Layout>aasdfasdf</Layout>;
}
