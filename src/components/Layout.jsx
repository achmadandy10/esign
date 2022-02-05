import Inbox from "../pages/Inbox"
import Sidebar from "./Sidebar"

const Layout = () => {
    return (
        <div className="w-full min-h-screen font-sans text-gray-900 bg-white relative">
            <Sidebar />

            <main className="ml-64">
                <Inbox/>
            </main>
        </div>
    )
}

export default Layout