const VARIANT_CLASSES = {
  primary:
    "bg-gradient-to-r from-sky-500 to-emerald-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:scale-[1.02] active:scale-95",
  secondary:
    "bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-200 hover:scale-[1.02]",
  emerald:
    "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 active:scale-95",
};

const CustomButton = ({
  type = "button",
  variant = "primary",
  children = "Custom Button",
  onClick,
  className = "",
  ...rest
}) => {
  const variantStyle = VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition-all duration-300 hover:cursor-pointer ${variantStyle} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default CustomButton;
