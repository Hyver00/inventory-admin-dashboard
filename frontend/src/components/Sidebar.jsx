import { Link } from "react-router-dom"

export default function Sidebar() {

    return (

        <div className="w-64 bg-gray-900 text-white min-h-screen p-6">

            <h2 className="text-2xl font-bold mb-8">
                Inventory Admin
            </h2>

            <nav className="space-y-4">

                <Link
                    to="/"
                    className="block p-2 rounded hover:bg-gray-700"
                >
                    Dashboard
                </Link>

                <Link
                    to="/products"
                    className="block p-2 rounded hover:bg-gray-700"
                >
                    Products
                </Link>

            </nav>

        </div>

    )

}