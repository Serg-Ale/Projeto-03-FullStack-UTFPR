const Button = ({ text, onclick }) => {
  return (
    <button
      type="submit"
      className="mb-4 mt-3 w-[20%] rounded-lg border-4 border-neutral-200 bg-neutral-200 p-4 text-xl font-bold text-neutral-950 hover:bg-primary hover:text-neutral-950"
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
