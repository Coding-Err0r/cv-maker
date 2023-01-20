import classNames from "classnames";

export default function Button({
  children,
  loading = false,
  variant = "default",
  ...props
}) {
  return (
    <button
      disabled={loading}
      className={classNames({
        "rounded-2xl shadow-lg shadow-gray-500 h-8 ml-2 mt-2 px-5 text-center text-white  text-base flex items-center justify-center cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50": true,
        "bg-transparent": variant === "default",
        "bg-green-600 border-2 border-green-300 hover:border-4 hover:border-opacity-60 hover:border-green-200":
          variant === "success",
        "bg-red-600 border-2 border-red-200 hover:border-4 hover:border-opacity-60 hover:border-red-200":
          variant === "danger",
        "bg-orange-600 border-2 border-orange-300 hover:border-4 hover:border-opacity-60 hover:border-orange-200":
          variant === "warning",
        "bg-cyan-500 border-2 border-cyan-100 hover:border-4 hover:border-opacity-60 hover:border-cyan-200":
          variant === "info",
      })}
      {...props}
    >
      {loading ? "...." : children}
    </button>
  );
}
