import { useState } from "react";

function usePosts() {
  const [posts, setPosts] = useState([]);

  //useEffect(() => {
  async function getPosts(token) {
    // Abfrage der API (HTTP)
    const URL = "http://127.0.0.1:8000/api";
    const result = await fetch(URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token.access,
      },
    });
    // Parsen der JSON Informationen (Erzeugt ein Promise Objekt)
    const data = await result.json();
    //console.log(data)
    setPosts(data);
  }
  //    setInterval(getPosts, 20000);
  //}, [])

  return {
    posts,
    getPosts,
    setPosts,
  };
}

export default usePosts;
