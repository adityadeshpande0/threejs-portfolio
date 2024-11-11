const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <div className={`flex justify-center ${containerClass}`}>
      <button
        class="flex items-center rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
