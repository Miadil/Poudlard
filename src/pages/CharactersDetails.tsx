import { useEffect, useState } from "react"
import { useParams } from "react-router"

function CharactersDetails(){
  const [character, setCharacter] = useState([])
  
  const {id} = useParams()

  useEffect(()=>{
    fetch(`https://miadil.github.io/HarryPotterApi/api/json/id/${id}.json`)
    .then(res => res.json())
    .then(resDataJson => console.log(resDataJson[0]) || setCharacter(resDataJson[0]) )
  },[])

  return <div>CharactersDetails 
    <p>
      {character.name}
    </p>
  </div>
}

export default CharactersDetails