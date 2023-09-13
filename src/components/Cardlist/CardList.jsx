
const CardList = ({headline, timer}) => {
    
    return (
        <div className="w-1/3">
            <h2 className="text-3xl">Spent time on read: {timer} min</h2>
            <h2 className="text-4xl">Bookmarked Blogs:{headline.length}</h2>
            <div>
                {
                    headline.map((line, idx)=> <p className="text-3xl" key={idx}>{line.title}</p>)
                }
            </div>
        </div>
    );
};

export default CardList;