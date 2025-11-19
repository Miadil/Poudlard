import { useEffect, useState } from "react"
import { Link } from "react-router"

import './Characters.css'
function Characters(){
  const [dataCharacters, setDataCharacters] = useState([])
  
  const getData = ()=> {
    fetch('http://localhost:4242/characters')
    .then(res => res.json())
    .then(resDataJson => console.log(resDataJson) || setDataCharacters(resDataJson) )
  }
  
  useEffect(() => {
    console.log('Je suis dans le UseEffect.')
    getData()
  },[])

  return <section className="charac-section">
      {console.log('je suis dans le return')}
      <h1>Characters</h1>
      <div className="charac-general">
        {dataCharacters.map((character) => <Link to={`/characters/${character.id}`}>
        <article key={character.id} className='Charac-GlobalCard'>
            <img src={character.image} alt={character.name} />
              <p>{character.name}</p>
            </article>
        </Link>
        )}
      </div>
    </section>
}

export default Characters