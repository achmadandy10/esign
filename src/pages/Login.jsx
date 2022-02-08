import Logo from "../images/logo.png"
import { FaLock, FaUser } from "react-icons/fa"

const Login = () => {
    return (
        <div className="bg-white">
            <main className="min-h-screen flex justify-center mx-auto">
                <div className="w-1/2 bg-red-600 hidden lg:block relative">
                    <div className="flex items-center justify-center w-full h-full">
                        <img src={ Logo } alt="logo"/>
                    </div>
                </div>
                
                <div className="flex-1 lg:w-1/2 flex justify-center flex-col">
                    <div className="flex flex-col px-5 sm:px-24 py-10">
                        <div className="self-center sm:self-start w-[150px]">
                            <img src={ Logo } alt="logo"/>
                        </div>

                        <div className="pt-5 pb-6">
                            <h1 className="text-3xl font-bold tracking-wide leading-loose">
                                Selamat Datang Kembali!
                            </h1>
                        </div>
                        <form action="">
                            <div>
                                <label htmlFor="username">Username</label>
                                <div className="flex items-center mt-2 w-full rounded-lg border border-gray-400 focus-within:shadow-lg focus-within:border-red-600">
                                <div className="flex items-center justify-center pl-6">
                                    <FaUser className="w-6 h-6 pointer-events-none"/>
                                </div>
                                <input 
                                    type="text" 
                                    id="username"
                                    name="username"
                                    placeholder="Masukkan NPM, Email, atau Username"
                                    className="
                                        px-4 py-4 w-full rounded-tr-lg rounded-br-lg focus:outline-none
                                        font-normal border-0 focus:ring-0
                                    "
                                />
                                </div>
                            </div>
                            <div className="pt-6">
                                <label htmlFor="password">Kata Sandi</label>
                                <div className="flex items-center mt-2 w-full rounded-lg border border-gray-400 focus-within:shadow-lg focus-within:border-red-600">
                                    <div className="flex items-center justify-center pl-6">
                                        <FaLock className="w-6 h-6 pointer-events-none"/>
                                    </div>
                                    <input 
                                        type="password" 
                                        id="password"
                                        name="password"
                                        placeholder="Masukkan Kata Sandi"
                                        className="
                                            px-4 py-4 rounded-tr-lg rounded-br-lg w-full focus:outline-none
                                            font-normal border-0 focus:ring-0
                                        "
                                    />
                                </div>
                            </div>

                            <div className="pt-8">
                                <button 
                                    type="submit" 
                                    className="
                                        py-4 px-8 text-white 
                                        bg-red-600 hover:bg-red-700 rounded-lg 
                                        shadow-lg w-full focus:ring-4
                                        focus:ring-red-100 focus:outline-none
                                    "
                                >
                                    Masuk
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login