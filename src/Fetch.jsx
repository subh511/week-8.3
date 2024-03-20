//import React from 'react'

//import { useEffect } from "react";

async function Fetch() {


  //1st way of fetching data;

  //   fetch("https://sum-server.100xdevs.com/todos").then(async (response) => {
  //     const json = await response.json();
  //     console.log(json.todos.length);
  //   });

  const response = await fetch(`https://sum-server.100xdevs.com/todos`)
  const json = await response.json();
  console.log(json.todos.length)

  return <div></div>;
}

export default Fetch;
