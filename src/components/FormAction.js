export default function FormAction({
    handleSubmit,
    type='Button',
    action='submit',
    text
}){
    return(
        <>
        {
            type==='Button' ?
            <button
                type={action}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm text-white font-medium rounded-md bg-amber-900 focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-amber-900 mt-10"
                onClick={handleSubmit}
            >
                {text}
            </button>
            :
            <></>
        }
        </>
    )
}