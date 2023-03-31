"use client"

export const Event = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="max-w-sm w-full shadow-lg">
        <div className="md:py-8 py-5 md:px-16 px-5 dark:bg-gray-700 bg-gray-50 rounded-b">
          <div className="px-4">
            <div className="border-b pb-4 border-gray-400 border-dashed">
              <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                9:00 AM
              </p>
              <a className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">
                Zoom call with design team
              </a>
              <p className="text-sm pt-2 leading-4 text-gray-600 dark:text-gray-300">
                Discussion on UX sprint and Wireframe review
              </p>
            </div>
            <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
              <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                10:00 AM
              </p>
              <a className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">
                Orientation session with new hires
              </a>
            </div>
            <div className="border-b pb-4 border-gray-400 border-dashed pt-5">
              <p className="text-xs font-light leading-3 text-gray-500 dark:text-gray-300">
                9:00 AM
              </p>
              <a className="focus:outline-none text-lg font-medium leading-5 text-gray-800 dark:text-gray-100 mt-2">
                Zoom call with design team
              </a>
              <p className="text-sm pt-2 leading-4 leading-none text-gray-600 dark:text-gray-300">
                Discussion on UX sprint and Wireframe review
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
