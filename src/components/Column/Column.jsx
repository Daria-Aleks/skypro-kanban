import Card from "../Card/Card"
function Column({title, cardList}){
    return <div className="main__column">
    <div className="column__title">
        <p>{title}</p>
    </div>
    <div className="cards">
        {cardList?.map((card) => (
        <Card name={card.title}
        theme={card.topic}
        date={card.date}
        key={card._id}
        id={card._id}
        />    
        ))}
    </div>
</div>
}
export default Column