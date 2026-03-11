export default function LoadingSkeleton() {

    return (

        <div className="animate-pulse space-y-4">

            <div className="h-10 bg-gray-300 rounded w-1/3"></div>

            <div className="grid grid-cols-4 gap-6">

                <div className="h-20 bg-gray-300 rounded"></div>
                <div className="h-20 bg-gray-300 rounded"></div>
                <div className="h-20 bg-gray-300 rounded"></div>
                <div className="h-20 bg-gray-300 rounded"></div>

            </div>

            <div className="h-64 bg-gray-300 rounded"></div>

        </div>

    )

}