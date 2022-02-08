import { useDrag } from "react-dnd"

const Drag = ({ id, label, icon }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "button",
        item: {
            id: id
        },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    return (
        <button ref={ drag } type="button" className="w-full flex items-center gap-2 h-full text-gray-900 bg-white border border-white hover:border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
            { icon }
            <span>{ label }</span>
        </button>
    );
};

export default Drag;
