import { useEffect, useState } from "react"

import Sidebar from "../components/Sidebar"
import StatsCard from "../components/StatsCard"
import InventoryChart from "../components/InventoryChart"
import LoadingSkeleton from "../components/LoadingSkeleton"

import { getProducts } from "../services/productService"

export default function Dashboard() {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const loadProducts = async () => {

        const res = await getProducts()

        setProducts(res.data)

        setLoading(false)

    }

    useEffect(() => {

        loadProducts()

    }, [])

    if (loading) {

        return (

            <div className="flex">

                <Sidebar />

                <div className="flex-1 p-10">
                    <LoadingSkeleton />
                </div>

            </div>

        )

    }

    const totalProducts = products.length

    const totalStock = products.reduce(
        (sum, p) => sum + Number(p.stock), 0
    )

    const inventoryValue = products.reduce(
        (sum, p) => sum + (Number(p.price) * Number(p.stock)),
        0
    )

    const lowStock = products.filter(p => p.stock < 10).length

    return (

        <div className="flex">

            <Sidebar />

            <div className="flex-1 bg-gray-100 min-h-screen p-10">

                <h1 className="text-3xl font-bold mb-6">
                    Inventory Dashboard
                </h1>

                <div className="grid grid-cols-4 gap-6 mb-8">

                    <StatsCard title="Total Products" value={totalProducts} />
                    <StatsCard title="Total Stock" value={totalStock} />
                    <StatsCard title="Inventory Value" value={`$${inventoryValue}`} />
                    <StatsCard title="Low Stock" value={lowStock} />

                </div>

                <InventoryChart products={products} />

            </div>

        </div>

    )

}