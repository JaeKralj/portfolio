export default function Button({ children, type, handleOnclick }) {
  return (
    <button
      onClick={handleOnclick}
      className={`px-4 py-3 text-center text-base text-lg text-white bg-green transition-all duration-200 ease-in-out hover:translate-y-1`}
      type={type || 'button'}
    >
      {children}
    </button>
  )
}
