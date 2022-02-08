import { useState } from "react";
import { useDrop } from "react-dnd";
import DragOnBoard from "./DragOnBoard";


const Board = ({ ListButton }) => {
    const [board, setBoard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "button",
        drop: (item) => addButtonToDrop(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))

    const addButtonToDrop = (id) => {
        const listButton = ListButton.filter((button) => id === button.id)
        setBoard((board) => [...board, listButton[0]])
    }

    return (
        <div ref={ drop } style={{ position: "relative", zIndex: "1000" }} className="w-[780px] h-[1508px] bg-gray-50 shadow-xl">
            { board.map(({ id, label, icon }, index) => {
                return (
                    <DragOnBoard key={ index } id={ id } label={ label } icon={ icon } board={ board } setBoard={ setBoard } index={ index }/>
                )
            }) }
        </div>
    )
};

export default Board;
