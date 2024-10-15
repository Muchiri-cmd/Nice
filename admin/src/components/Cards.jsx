
const Cards = () => {
  return (
    <div className="flex-1 p-6 rounded-lg shadow">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Dashboard Overview</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:h-72">
            <div className="bg-white shadow-lg transition-transform transform hover:scale-105 p-6 rounded-lg flex flex-col justify-between cursor-pointer">
                <h2 className="text-xl sm:text-5xl font-semibold text-gray-700 mb-2">Number of Products</h2>
                <p className="sm:text-7xl text-5xl font-bold text-secondary">15</p>
            </div>
            <div className="bg-white shadow-lg transition-transform transform hover:scale-105 p-6 rounded-lg flex flex-col justify-between cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-700 mb-2 sm:text-5xl">Total Expected Revenue</h2>
                <p className="sm:text-7xl  text-5xl font-bold text-secondary">kes 1,200</p>
            </div>
        </div>
    </div>
  )
}

export default Cards
