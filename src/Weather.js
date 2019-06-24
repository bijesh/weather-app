import React,{useState} from 'react';
import axios from 'axios';
import Results from './Results'
const Weather=()=>{

    const [results,setResults] = useState(null);
    const [location,setLocation] = useState("");
   
    const handleSubmit = event => {
        event.preventDefault();

     axios.get(`http://localhost:5000/api/weather/${location}`)
      .then(response => setResults(response.data))
      .catch(console.error);

  }
    return(
        <form>
            <input placeholder='location' value={location} onChange={e => setLocation(e.target.value)} required/>
            <button onClick={handleSubmit}>Search</button>
            <div>
                {results!==null ? <Results results={results}/> : 'No Result'  }     
                
            </div>
        </form>
      
    );

   
};

export default Weather;
