export default function Button({ onclick = () => {}, children }){
    return (
        <div>
            <button 
            type="submit"
            onClick={onclick}
            className="block w-full p-2 text-center font-semibold text-white bg-blue-800 rounded-md shadow-sm hover:bg-blue-700 focus:outline-nome focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
            {children}
            </button>
          </div>
    )
}