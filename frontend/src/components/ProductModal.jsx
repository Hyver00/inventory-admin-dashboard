import { useState, useEffect } from "react"
import { createProduct, updateProduct } from "../services/productService"

export default function ProductModal({ open, onClose, refresh, product }) {

    const [form, setForm] = useState({
        name: "",
        description: "",
        price: "",
        stock: ""
    })

    useEffect(() => {
        if (product) {
            setForm(product)
        }
    }, [product])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (product) {
            await updateProduct(product.id, form)
        } else {
            await createProduct(form)
        }

        refresh()
        onClose()
    }

    if (!open) return null

    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black/50">

            <div className="bg-white p-6 rounded-xl w-96">

                <h2 className="text-xl font-bold mb-4">
                    {product ? "Edit Product" : "Add Product"}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">

                    <input
                        name="name"
                        placeholder="Product name"
                        className="w-full border p-2 rounded"
                        onChange={handleChange}
                        value={form.name}
                    />

                    <input
                        name="price"
                        placeholder="Price"
                        className="w-full border p-2 rounded"
                        onChange={handleChange}
                        value={form.price}
                    />

                    <input
                        name="stock"
                        placeholder="Stock"
                        className="w-full border p-2 rounded"
                        onChange={handleChange}
                        value={form.stock}
                    />

                    <textarea
                        name="description"
                        placeholder="Description"
                        className="w-full border p-2 rounded"
                        onChange={handleChange}
                        value={form.description}
                    />

                    <div className="flex justify-end gap-3">

                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-200 rounded"
                        >
                            Cancel
                        </button>

                        <button
                            className="px-4 py-2 bg-blue-600 text-white rounded"
                        >
                            Save
                        </button>

                    </div>

                </form>

            </div>

        </div>

    )

}