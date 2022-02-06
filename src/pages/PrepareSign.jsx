import { useState } from "react";
import { FaCheck, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FormAddDocument from "../components/FormAddDocument";
import FormAddRecipients from "../components/FormAddRecipients";
import FormAddSignature from "../components/FormAddSignature";

const ProgressBar = [
    { number: 1, title: "Dokumen" },
    { number: 2, title: "Penerima" },
    { number: 3, title: "Membuat" },
    { number: 4, title: "Memeriksa" },
]

const PrepareSign = () => {
    const [form, setForm] = useState(1)
    const [data, setData] = useState({
        document: [],
        recipients: [
            { name: "", email: "" }
        ],
        signature: "",
        detail: ""
    });

    const handleFormSubmit = () => {
        if ( form === ProgressBar.length ) {
            console.log("finish")
        } else {
            setForm(form + 1)
        }
    }

	return (
		<div className="">
			<div className='flex py-5 px-60 border-b border-gray-200'>
				{ ProgressBar.map(({ number, title }, index) => {
                    return (
                        <div className='text-center w-full bullet-bar' key={ index }>
                            <p className={`text-xl font-medium ${ form === number || form >= number + 1 ? "text-gray-800" : "text-gray-400"} mb-2`}>{ title }</p>
                            <div className={`bullet h-6 w-6 border-2 ${ form >= number + 1 ? "border-red-600 bg-red-600 text-white" : form === number ? "border-gray-800 text-gray-800" : "border-gray-400 text-gray-400"} inline-block rounded-full relative`}>
                                <span className='h-full flex items-center justify-center font-medium text-sm'>
                                    { form >= number + 1 ? <FaCheck/> : number }
                                </span>
                            </div>
                        </div>
                    )
                }) }
			</div>

            { form === 1 && (
                <div className="px-40 py-10">
                    <FormAddDocument data={ data } setData={ setData }/>
                </div>
            ) }

            { form === 2 && (
                <div className="px-40 py-10">
                    <FormAddRecipients data={ data } setData={ setData }/>
                </div>
            ) }
            
            { form === 3 && (
                <div className="flex h-full">
                    <FormAddSignature data={ data } setData={ setData }/>
                </div>
            ) }

            <div className="flex items-center justify-end p-5 border-t">
                { form !== 1 && (
                    <button onClick={ () => setForm(form - 1) } className="flex items-center justify-center gap-2 text-gray-800 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"><FaChevronLeft /> Kembali</button>
                ) }
                <button onClick={ handleFormSubmit } className="flex items-center justify-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Berikutnya <FaChevronRight /></button>
            </div>
		</div>
	);
};

export default PrepareSign;
