export default function Progress() {
  return (
    <div className="px-6 py-4 bg-blue-500 rounded-lg text-white">
      <div className="flex justify-between mb-4">
        <p>Daily goal</p>
        <p>10g/150g</p>
      </div>
      <div className="w-full h-4 bg-gray-700 rounded-full mb-4">
        <div className="w-1/2 h-4 bg-blue-800 rounded-full"></div>
      </div>
      <div className="flex gap-2 text-center">
        <div className="text-white bg-blue-800 w-1/3 py-2 rounded-lg">
          <p className="text-xl">57g</p>
          <small>logged</small>
        </div>
        <div className="text-white bg-blue-800 w-1/3 py-2 rounded-lg">
          <p className="text-xl">63g</p>
          <small>remaining</small>
        </div>
        <div className="text-white bg-blue-800 w-1/3 py-2 rounded-lg">
          <p className="text-xl">58%</p>
          <small>complete</small>
        </div>
      </div>
    </div>
  )
}
