import React from 'react';
import { FaPaperPlane, FaUser } from 'react-icons/fa';

const FormAddRecipients = () => {
    return (
        <form action=''>
            <h1 className="text-3xl mb-5">Tambahkan Penerima</h1>

            <div className="flex items-center gap-2">
                <span className="border border-gray-800 rounded p-2 w-10 h-10">
                    <FaPaperPlane className="text-xl"/>
                </span>

                <div className="flex flex-col">
                    <h3 className="text-xl text-gray-500 font-semibold">Pengirim</h3>
                    <h4 className="text-md text-gray-800 font-semibold">Achmad Andy Dekanovy</h4>
                </div>
            </div>

            <div className="mt-5">
                <div className="flex items-center gap-2">
                    <span className="border border-gray-800 rounded p-2 w-10 h-10">
                        <FaUser className="text-xl"/>
                    </span>

                    <div className="flex flex-col">
                        <h3 className="text-xl text-gray-500 font-semibold">Penerima</h3>
                    </div>
                </div>

                <div className="px-24 mt-5">
                    <form className="grid grid-cols-4 gap-5">
                        <div className="w-full rounded bg-gray-50 p-5 border-t-[6px] border-red-600 shadow-md">
                            <div class="mb-4">
                                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                                <input type="name" id="name" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" required/>
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                <input type="email" id="email" class="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" required/>
                            </div>
                        </div>
                        <button type="button" class="h-full flex items-center justify-center gap-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"><FaPlus/> Tambah Penerima</button>
                    </form>
                </div>
            </div>
        </form>
    )
}

export default FormAddRecipients;
