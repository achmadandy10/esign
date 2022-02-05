import React from 'react';
import { FaPen } from 'react-icons/fa';

const FormAddSignature = () => {
    return (
        <>
            <div className="p-5 flex-1 border-r border-gray-200">
                <span className="text-xl font-semibold text-gray-800">Fitur</span>
                <div className="mt-5">
                    <button type="button" className="w-full flex items-center gap-2 h-full text-gray-900 bg-white border border-white hover:border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800">
                        <FaPen/>
                        <label htmlFor="h-full">Tanda Tangan</label>
                    </button>
                </div>
            </div>

            <div className="p-5 flex-[4] flex justify-center max-h-[calc(100vh-200px)] overflow-auto">
                <div className="w-[780px] h-[1508px] bg-gray-50 shadow-xl"></div>
            </div>
        </>
    )
}

export default FormAddSignature;