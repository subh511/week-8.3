//import React from 'react'

import axios from "axios";
async function FetchedAxios() {

  const response = await axios.get(`https://sum-server.100xdevs.com/todos`);
  console.log(response.data.todos.length);

  return <div>Axios</div>;
}

export default FetchedAxios;
