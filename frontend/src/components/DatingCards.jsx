import React, {useState,useEffect} from 'react';
import "./DatingCards.css"
import axios from './axios.js';

function DatingCards() {

    const [data,setData] = useState([]);
    useEffect(() => {
        const fetchData = async () =>{
            const req = await axios.get("/dating/cards");
            setData(req.data)
        }
        fetchData();
    },[])
    return (
        <div className='card-container'>
            {
                data.map(d => (
                    <div className='card'>
                        <img src={d.imgUrl} alt="" />
                        <p>{d.name}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default DatingCards;