const Input = ({ type, placeholder }) => {
  return (
    <input
      className="placeholder:white text-1xl ring-offset-background:border-0 flex h-10 w-full rounded-md border border-input bg-background px-4 py-8 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
