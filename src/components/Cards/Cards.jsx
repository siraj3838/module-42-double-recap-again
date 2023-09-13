import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Cards = ({redBtnClick, markTime}) => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="w-2/3">
            <h2 className="text-3xl">Blogs Total: {cards.length}</h2>
            <div>
                {
                    cards.map((card, idx)=> <Card markTime={markTime} redBtnClick={redBtnClick}  key={idx} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;