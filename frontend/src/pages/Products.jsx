import { useEffect, useState } from "react"

import Sidebar from "../components/Sidebar"
import ProductsTable from "../components/ProductsTable"
import ProductModal from "../components/ProductModal"
import TableSkeleton from "../components/TableSkeleton"

import { getProducts } from "../services/productService"

export default function Products() {

    const [products, setProducts] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const loadProducts = async () => {

        const res = await getProducts()

        setProducts(res.data)

        setLoading(false)

    }

    useEffect(() => {

        loadProducts()

    }, [])

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-100 min-h-screen p-10">

                <h1 className="text-3xl font-bold mb-6">
                    Products Management
                </h1>

                <div className="flex justify-end mb-4">

                    <button
                        onClick={() => setModalOpen(true)}
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                        Add Product
                    </button>

                </div>

                {loading ? (

                    <TableSkeleton />

                ) : (

                    <ProductsTable
                        products={products}
                        refresh={loadProducts}
                        onEdit={(product) => {
                            setSelectedProduct(product)
                            setModalOpen(true)
                        }}
                    />

                )}

                <ProductModal
                    open={modalOpen}
                    onClose={() => {
                        setModalOpen(false)
                        setSelectedProduct(null)
                    }}
                    refresh={loadProducts}
                    product={selectedProduct}
                />

            </div>

        </div>

    )

}