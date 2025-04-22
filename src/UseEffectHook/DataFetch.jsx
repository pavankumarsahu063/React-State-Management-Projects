import React, { useEffect, useState } from 'react';

const DataFetch = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  // Fetching the data from the API
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setData(data); 
      setFilteredData(data);
    };

    fetchData();
  },[] );

  
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query); 

    
    const filtered = data.filter((ele) =>
      ele.title.toLowerCase().includes(query.toLowerCase()) ||
      ele.category.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered); 
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter Product"
        value={searchQuery}
        onChange={handleSearchChange} 
      />
      <button>Search</button>
      {filteredData.length > 0 ? (
        filteredData.map((ele) => (
          <div key={ele.id}>
            <h2>{ele.title}</h2>
            <p>{ele.category}</p>
            <img src={ele.image} alt="product" />
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </>
  );
};

export default DataFetch;
