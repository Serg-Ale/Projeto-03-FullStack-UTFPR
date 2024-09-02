const InputError = ({ text }) => {
  return (
    <span className="w-full rounded bg-red-500 p-2 text-xl font-bold text-neutral-200">
      {text}
    </span>
  );
};

export default InputError;
