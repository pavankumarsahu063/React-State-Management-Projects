import React, { useState, useEffect } from 'react';

const DataFetch1 = () => {
  const [data, setData] = useState([]);
  const [searchData,setSearchData]=useState("");
//   const [filteredData,setFilteredData]=useState([]);

const handelOnChane=(e)=>{
   const iteam=e.target.value;
    // console.log(iteam)
    setSearchData(iteam);

    // setData(searchData)
   let filteredData=data.filter((ele)=>
    ele.email.toLowerCase().includes(iteam.toLowerCase()))
   setData(filteredData)
   console.log(filteredData)
   
}
console.log(searchData)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);
      setData(data);
      
    };

    fetchData();
  },[]);

 
  return (
    <>

     <div className="input">
<input type="text" placeholder='Enter Email' name="iteam" value={searchData} onChange={handelOnChane}/>
     </div>
      {data.length > 0 ? (
        data.map((ele) =>(
          <div key={ele.id}>
            <h1>{ele.id}: {ele.name}</h1>
            <p>{ele.email}</p>
            <p>{ele.phone}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p> 
      )}
    </>
  );
}

export default DataFetch1;
