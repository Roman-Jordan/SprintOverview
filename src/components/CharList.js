import React, {useState,useEffect} from 'react'
import CharCard from './CharCard'
import axios from 'axios'

const CharList = (props) =>{

    let [chars,setChars]=useState();

    useEffect(()=>{

        let fetch = () =>{
            axios.get('https://rickandmortyapi.com/api/character/')
            .then(res=>setChars(res.data.results))
            .catch(err=>console.log(err))
        }
        
        fetch()
    },[])
    return (
        <div className="CharList">
            {chars && chars.map((char ,i)=><CharCard key={i} char={char}/>)}
        </div>
    )
}

export default CharList;

