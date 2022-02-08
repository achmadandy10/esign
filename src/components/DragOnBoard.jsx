import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const DragOnBoard = ({ id, label, icon, board, setBoard, index }) => {
    const [mousePosition, setMousePosition] = useState({
        x: null,
        y: null,
    })

    const mouseStop = () => {
        setMousePosition({
            x: mousePosition.x,
            y: mousePosition.y,
        })
    }

    const mouseMove = () => {
        function handle(e) {
            setMousePosition({
                x: e.pageX,
                y: e.pageY,
            })
        }

        document.addEventListener("mousemove", handle)
        return () => document.removeEventListener("mousemove", handle)
    }

    const deleteButton = (i) => {
        const listButton = board.filter((button, index) => index !== i)
        setBoard(listButton)
    }

    return (
        <button onMouseDown={ mouseMove } onMouseUp={ mouseStop } type="button" style={{ position: "absolute", top: mousePosition.y + "px", left: mousePosition.x + "px", zIndex: "100" }} className="w-24 h-24 flex flex-col items-center gap-2 text-white bg-red-600 border border-white hover:border-red-300 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm text-center dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
            { icon }
            <span>{ label }</span>
            
            <span onClick={ () => deleteButton(index) } className="">
                <FaTimes/>
            </span>
        </button>
    );
};

export default DragOnBoard;
