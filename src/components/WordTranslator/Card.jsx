const Card = ({ card, isSelected, isMatched, onClick }) => {
    return (
        <button
            onClick={onClick}
            disabled={isMatched}
            className={`card ${
                isMatched ? "correct" : isSelected ? "selected" : ""
            }`}
        >
            {card.text}
        </button>
    );
};

export default Card;
