import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { FaPen } from "react-icons/fa";
import Board from "./Board";
import Drag from './Drag';

const ListButton = [
    { 
        id: 1, 
        label: "Tanda Tangan", 
        icon: <FaPen/>, 
    }
]

const FormAddSignature = () => {
    return (
        <DndProvider backend={ HTML5Backend }>
            <div className="p-5 flex-1 border-r border-gray-200">
                <span className="text-xl font-semibold text-gray-800">Fitur</span>
                <div className="mt-5">
                    { ListButton.map(({ id, label, icon }, index) => {
                        return (
                            <Drag key={ index } id={ id } label={ label } icon={ icon }/>
                        )
                    }) }
                </div>
            </div>

            <div className="p-5 flex-[4] flex justify-center max-h-[calc(100vh-200px)] overflow-auto">
                <Board ListButton={ ListButton }/>
            </div>
        </DndProvider>
    )
}

export default FormAddSignature;