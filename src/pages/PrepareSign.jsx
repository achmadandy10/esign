import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaPaperPlane, FaPen, FaPlus, FaUser } from "react-icons/fa";
import UploadFile from "../components/UploadFile";

const PrepareSign = () => {
    const [form, setForm] = useState(2)
    const [list, setList] = useState([]);

    const RecipientsForm = () => {
        return (
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
        )
    }

    useEffect(() => {
        console.log(list)
        setList([...list, RecipientsForm])
    }, []);

	return (
		<div className="">
			<div className='flex py-5 px-60 border-b border-gray-200'>
				<div className='text-center w-full bullet-bar'>
					<p className='text-xl font-medium text-gray-800 mb-2'>Dokumen</p>
					<div className="bullet h-6 w-6 border-2 border-gray-800 inline-block rounded-full relative">
						<span className='font-medium text-sm absolute left-1/2 -translate-x-1/2'>
							1
						</span>
					</div>
				</div>
				<div className='text-center w-full bullet-bar'>
					<p className='text-xl font-medium text-gray-800 mb-2'>Penerima</p>
					<div className="bullet h-6 w-6 border-2 border-gray-800 inline-block rounded-full relative">
						<span className='font-medium text-sm absolute left-1/2 -translate-x-1/2'>
							2
						</span>
					</div>
				</div>
				<div className='text-center w-full bullet-bar'>
					<p className='text-xl font-medium text-gray-800 mb-2'>Membuat</p>
					<div className="bullet h-6 w-6 border-2 border-gray-800 inline-block rounded-full relative">
						<span className='font-medium text-sm absolute left-1/2 -translate-x-1/2'>
							3
						</span>
					</div>
				</div>
				<div className='text-center w-full bullet-bar'>
					<p className='text-xl font-medium text-gray-800 mb-2'>Memeriksa</p>
					<div className="bullet h-6 w-6 border-2 border-gray-800 inline-block rounded-full relative">
						<span className='font-medium text-sm absolute left-1/2 -translate-x-1/2'>
							4
						</span>
					</div>
				</div>
			</div>

            { form === 1 && (
                <div className="px-40 py-10">
                    <form action=''>
                        <h1 className="text-3xl mb-5">Tambahkan Dokumen</h1>
                        <UploadFile />
                    </form>
                </div>
            ) }

            { form === 2 && (
                <div className="px-40 py-10">
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
                                <form className="grid grid-cols-3 gap-5">
                                    { list.map((value) => {
                                        console.log(value)
                                        return value
                                    }) }

                                    <button type="button" class="h-full flex items-center justify-center gap-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"><FaPlus/> Tambah Penerima</button>
                                </form>
                            </div>
                        </div>
                    </form>
                </div>
            ) }
            
            { form === 3 && (
                <div className="flex h-full">
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
                </div>
            ) }

            <div className="flex items-center justify-end p-5 border-t">
                { form !== 1 && (
                    <button onClick={ () => setForm(form - 1) } className="flex items-center justify-center gap-2 text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"><FaChevronLeft /> Kembali</button>
                ) }
                <button onClick={ () => setForm(form + 1) } className="flex items-center justify-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Berikutnya <FaChevronRight /></button>
            </div>
		</div>
	);
};

export default PrepareSign;
