import { TrashIcon } from '@heroicons/react/24/outline'

export default function FoodLog() {
  return (
    <div className="px-6 py-4 bg-blue-500 rounded-lg text-white mb-4">
      <p className="text-sm mb-8">Today's Log</p>
      <ul>
        <li className="flex justify-between border-b border-white mb-4">
          <div>
            <p className="m-0 leading-none text-lg font-semibold">
              Chicken Breast
            </p>
            <time className="text-xs leading-none">8:32am</time>
          </div>
          <div className="text-center">
            <p className="text-md">32g</p>
            <button>
              <TrashIcon className="w-5 h-5 stroke-red-500" />
            </button>
          </div>
        </li>
        <li className="flex justify-between border-b border-white mb-4">
          <div>
            <p className="m-0 leading-none text-lg font-semibold">
              Greek yogurt
            </p>
            <time className="text-xs">10:15am</time>
          </div>
          <div className="text-center">
            <p className="text-md">17g</p>
            <button>
              <TrashIcon className="w-5 h-5 stroke-red-500" />
            </button>
          </div>
        </li>
        <li className="flex justify-between">
          <div>
            <p className="m-0 leading-none text-lg font-semibold">
              Protein shake
            </p>
            <time className="text-xs">1:04pm</time>
          </div>
          <div className="text-center">
            <p className="text-md">38g</p>
            <button>
              <TrashIcon className="w-5 h-5 stroke-red-500" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
