import './HouseCard.css'


function HouseCard(props){
  const {name, points} = props.house
  return (
    
    <article  className="house-card">
      <header className="house-card__header">
        <h3 className="house-name">{name}</h3>
      </header>
      <div className="house-points">
        <span className="house-points__value">{points}</span>
        <span className="house-points__label">points</span>
      </div>
    </article>
  )
}

export default HouseCard