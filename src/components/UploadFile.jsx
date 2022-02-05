import { FaFileUpload } from "react-icons/fa"

const UploadFile = () => {
    return (
        <div className="mx-auto">
            <div className="flex flex-col gap-y-5 items-center cursor-pointer hover:border-red-600 rounded border-2 py-12 border-dashed border-gray-200">
                <FaFileUpload className="w-24 h-24 text-gray-800"/>
                <span className="text-xl text-gray-800">Letakan file Anda di sini</span>
                <span className="text-md">atau</span>
                <label htmlFor="" className="cursor-pointer text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Pilih File</label>
            </div>
        </div>
    )
}

export default UploadFile