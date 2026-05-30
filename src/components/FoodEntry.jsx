export default function FoodEntry() {
  return (
    <div className="px-6 py-4 bg-blue-500 rounded-lg text-white mb-4">
      <p className="uppercase text-sm mb-2">log a food</p>
      <input
        className="w-full block outline outline-solid outline-white p-2 rounded-sm mb-4"
        type="text"
        placeholder="Food name (e.g. chicken breast)"
      />
      <div className="flex justify-between gap-4">
        <input
          className="outline outline-solid outline-white p-2 rounded-sm flex-2"
          type="number"
          placeholder="Protein (g)"
        />
        <button className="bg-green-600 text-white flex-1 rounded-sm">
          Add +
        </button>
      </div>
    </div>
  )
}
