import { FaPaperPlane, FaPlus, FaTrash, FaUser } from 'react-icons/fa';

const FormAddRecipients = ({ data, setData }) => {
    const handleRecipients = (index, event) => {
        const values = [...data.recipients]
        values[index][event.target.name] = event.target.value
        setData({ ...data, recipients: values })
    }

    const handleRemoveRecipients = (index) => {
        const values = [...data.recipients]
        values.splice(index, 1)
        setData({ ...data, recipients: values })
    }

    const handleAddRecipients = () => {
        setData({ ...data, recipients: [...data.recipients, { name: "", email: "" }]})
    }

    return (
        <div>
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
                    <div className="grid grid-cols-3 gap-5">
                        { data.recipients.map((field, index) => {
                            return (
                                <div key={ index } className={`relative w-full rounded bg-gray-50 p-5 border-t-[6px] ${ index % 2 === 0 ? "border-red-600" : "border-gray-800" } shadow-md`}>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nama</label>
                                        <input type="text" name="name" onChange={ (event) => handleRecipients(index, event) } value={ field.name } id="name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" required/>
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                        <input type="email" name="email" onChange={ (event) => handleRecipients(index, event) } value={ field.email } id="email" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500" required/>
                                    </div>
                                    { data.recipients.length !== 1 && (
                                        <button type="button" onClick={ () => handleRemoveRecipients(index) } className="text-gray-800 border border-gray-800 hover:border-red-600 hover:bg-red-600 hover:text-white focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800">
                                            <FaTrash className="w-5 h-5"/>
                                        </button>
                                    ) }
                                </div>
                            )
                        }) }

                        <button type="button" onClick={ handleAddRecipients } className="h-full flex items-center justify-center gap-2 text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-gray-600 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-800"><FaPlus/> Tambah Penerima</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormAddRecipients;
