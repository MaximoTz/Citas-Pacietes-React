const Error = ({children}) => {
    return (
        <div className="bg-red-700 uppercase text-center text-white rounded-md font-semibold mb-5 p-2">
            {children}
        </div>
    )
}

export default Error