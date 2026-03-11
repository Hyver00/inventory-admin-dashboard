import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

export default function InventoryChart({ products }) {

    const data = products.map(p => ({
        name: p.name,
        stock: p.stock
    }))

    return (

        <div className="bg-white p-6 rounded-xl shadow">

            <h2 className="text-lg font-semibold mb-4">
                Inventory Stock
            </h2>

            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="stock" />
                </BarChart>
            </ResponsiveContainer>

        </div>
    )
}