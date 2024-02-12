import Card from "../Card/Card"
function Column({title, cardList}){
    // console.log(cardList)
    return <div className="main__column">
    <div className="column__title">
        <p>{title}</p>
    </div>
    <div className="cards">
        {cardList?.map((card) => (
        <Card name={card.text}
        theme="Web Design"
        date={card.created_at}
        key={card.id}
        id={card.id}
        />    
        ))}
    </div>
</div>
}
export default Column