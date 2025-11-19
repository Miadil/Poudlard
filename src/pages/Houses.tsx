import { useEffect, useState } from "react"
function Houses(){
  const [houses, setHouses] = useState([])

  useEffect(()=>{
      fetch(``)
      .then(res => res.json())
      .then(resDataJson => console.info(resDataJson[0]) || setHouses(resDataJson[0]) )
    },[])
 
    return <div>Houses</div>
}

export default Houses