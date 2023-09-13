
const Card = ({ card, redBtnClick, markTime }) => {
    const { title, id, cover, reading_time, author_img, author, posted_date, hashtags } = card;
    return (
        <div className="space-y-5 mb-10">
            <img src={cover} alt="" />
            {/* author div */}
            <div className="flex justify-between items-center">
                {/* author author_img */}
                <div className="flex gap-5">
                    <img className="w-14" src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* min red btn*/}
                <div className="flex gap-4 items-center">
                    <p>{reading_time} min read</p>
                    <button onClick={()=> redBtnClick(card)} className="bg-pink-500 text-white rounded-xl px-6 py-3">red</button>
                </div>
            </div>
            <h1 className="text-4xl">{title}</h1>
            <div className="flex gap-6">
                {
                    hashtags.map((hash, idx) => <p key={idx}>#{hash}</p>)
                }
            </div>
            <button onClick={()=> markTime(reading_time,id)} className="bg-pink-500 text-white rounded-xl px-6 py-3">Mark As Read</button>
        </div>
    );
};

export default Card;