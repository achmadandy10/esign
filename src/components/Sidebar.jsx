import { Link, NavLink } from "react-router-dom"
import Logo from "../images/logo.png"
import { FaEdit, FaInbox, FaPaperPlane, FaSignOutAlt, FaTrash } from "react-icons/fa"

const menu = [
    { name: "Kotak Masuk", icon: <FaInbox/>, link: "/inbox" },
    { name: "Terkirim", icon: <FaPaperPlane/>, link: "/sent" },
    { name: "Draf", icon: <FaEdit/>, link: "/draft" },
    { name: "Sampah", icon: <FaTrash/>, link: "/trash" },
]

const Sidebar = () => {
    return (
        <aside className="w-64 border-r border-gray-200 fixed h-screen overflow-y-auto">
            <div className="py-6 px-10">
                <Link to="/dashboard">
                    <img src={ Logo } alt="logo" className="w-40"/>
                </Link>

                <ul className="flex flex-col gap-y-2 mt-10">
                    <span className="text-gray-600 font-semibold">Menu</span>
                    { menu.map(({ name, icon, link }, idx) => {
                        return (
                            <li key={ idx }>
                                <NavLink 
                                    to={ link }
                                    activeClassName="bg-gray-800 text-gray-50 rounded" 
                                    className="flex gap-x-4 items-start p-2 rounded text-gray-500 hover:bg-gray-800 hover:text-white"
                                >
                                    <span className="flex items-center w-6 h-6 fill-current">{ icon }</span>
                                    <span>{ name }</span>
                                </NavLink>
                            </li>
                        )
                    }) }
                </ul>
            </div>

            <div className="absolute bottom-0 w-full border-t border-gray-200">
                <ul className="flex flex-col gap-y-2">
                    <li>
                        <button className="w-full flex gap-x-4 items-start px-10 py-5 text-gray-500">
                            <span className="flex items-center w-6 h-6 fill-current"><FaSignOutAlt/></span>
                            <span>Keluar</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}

export default Sidebar