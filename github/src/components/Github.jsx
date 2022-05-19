import React, { useEffect, useState } from "react";
import axios from "axios";
import GithubCard from "./GithubCard";
import SearchBox from "./SearchBox";

const getGithubUsers = (q = "Soumyaranjankalia", page=1) => {
  return axios("http://api.github.com/search/users", {
    method: "GET",
    params: {
      q,
      per_page:5,
      page
    },
  });
};

export default function Github() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("masai")
  const [page, setPage] = useState(1)

  useEffect(() => {
    getGithubUsers(query, page)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query, page]);

  const handelClick = (query) => setQuery(query)
  const handelPageChanging = (page) => setPage(page)

  return (
    <div>
      <h2>Github</h2>
      <SearchBox handelClick={handelClick} />
      {data?.items?.map((item)=>(
          <GithubCard key={item.id} {...item}/>
      ))}
     <div>
         <button disabled={page===1} onClick={()=> setPage(page-1)}>PREV</button>
         <button onClick={()=> setPage(page+1)}>NEXT</button>
     </div>
    </div>
  );
}
