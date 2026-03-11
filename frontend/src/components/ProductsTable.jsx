import { Trash, Pencil } from "lucide-react"
import { deleteProduct } from "../services/productService"

export default function ProductsTable({ products, refresh, onEdit }) {

    const remove = async (id) => {
        await deleteProduct(id)
        refresh()
    }

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-lg font-semibold mb-4">
                Products
            </h2>

            <table className="w-full">

                <thead>

                    <tr className="border-b">
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Stock</th>
                        <th className="p-2">Actions</th>
                    </tr>

                </thead>

                <tbody>

                    {products.map(product => (

                        <tr key={product.id} className="border-b">

                            <td className="p-2">{product.name}</td>
                            <td className="p-2">${product.price}</td>
                            <td className="p-2">{product.stock}</td>

                            <td className="flex gap-3 p-2">

                                <button
                                    onClick={() => onEdit(product)}
                                    className="text-blue-500"
                                >
                                    <Pencil size={18} />
                                </button>

                                <button
                                    onClick={() => remove(product.id)}
                                    className="text-red-500"
                                >
                                    <Trash size={18} />
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    )

}