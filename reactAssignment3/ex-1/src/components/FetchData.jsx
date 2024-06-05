import React, {useState, useEffect} from 'react'

const FetchDataComponent = () => {
    const [data , setData] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    },[])

    return (
        <div>
            <h1>Fetch Data</h1>
            <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
        </div>
    )
}

export default FetchDataComponent;