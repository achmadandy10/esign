import { FaPlus } from "react-icons/fa"
import { Link } from "react-router-dom"

const Header = ({ title, subtitle }) => {
    return (
        <div className="flex items-center justify-between py-7 px-10 border-b border-gray-200">
            <div>
                <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">{ title }</h1>
                <p className="text-sm font-menium text-gray-500">{ subtitle }</p>
            </div>

            <Link to={ "/dashboard" } className="flex gap-3 bg-red-600 text-white rounded items-center justify-center py-2.5 px-6">
                <FaPlus />
                Buat Pesan
            </Link>
        </div>
    )
}

export default Header