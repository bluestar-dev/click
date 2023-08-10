import React, { useEffect } from "react";
import { useState } from "react";



export default function Home() {
  const [data, setData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

useEffect(() => {
    const url = "/api/click";
    fetch(url, {
      method: "GET"
    })
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

                                                                                 





  const handleClick = () => {
    setIsButtonClicked(true);
    const url = "/api/click";
    fetch(url, {
      method: "POST"
    })
      .then(response => response.json())
      .then(data => setData(data));
  };

  useEffect(() => {
    if (isButtonClicked) {
      const url = "/api/click";
      fetch(url, {
        method: "POST"
      })
        .then(response => response.json())
        .then(data => setData(data));
    }		
  }, [isButtonClicked])





  return (

<>
<div className="flex flex-col items-center justify-center h-screen">

  <div className="text-3xl font-bold mt-2 w-24 h-24 flex items-center justify-center bg-blue-500 hover:bg-red-500 text-white rounded-md shadow-md" onClick={handleClick}>
    {data.count}
  </div>
</div>
</>


  );
}
