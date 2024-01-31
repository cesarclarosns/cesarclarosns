/* eslint-disable react/no-unescaped-entities */
export default function Button() {
  return (
    <div className="grid items-start justify-center gap-8">
      <div className="group relative">
        <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-75 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
        <button className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-black px-7 py-4 leading-none">
          <span className="pr-6 text-gray-100">Linear Release 2021.09</span>
          <span className="pl-6 text-indigo-400">See what's new</span>
        </button>
      </div>
    </div>
  );
}
