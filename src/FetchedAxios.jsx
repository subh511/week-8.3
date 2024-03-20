//import React from 'react'

import axios from "axios";
async function FetchedAxios() {
  // const response = await axios.get(`https://sum-server.100xdevs.com/todos`);
  // console.log(response.data.todos.length);

  const response = await axios.post(
    ` https://httpdump.app/dumps/4d0a776d-ff71-45fc-a0ef-0138cfe2fb8c?a=b`,
    {
      username: "harkirat",
      password: "1234567",
    },
    {
      headers: {
        Authorization: "Bearer 123",
      },
    }
  );
  console.log(response.data.todos.length);

  return <div>Axios</div>;
}

//axios.put;
//axios.delete;
//axios.post
export default FetchedAxios;
