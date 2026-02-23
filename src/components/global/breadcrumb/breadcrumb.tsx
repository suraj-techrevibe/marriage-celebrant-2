import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const Breadcrumb = () => {
  const location = useLocation();

  if (location.pathname === "/") return null;

  const pathnames = location.pathname
    .split("/")
    .filter((x) => x);

  return (
    <nav className="justify-start mt-32">
      <ol className="flex flex-wrap items-center justify-center gap-2 text-white text-sm md:text-base font-medium">
        {/* Home */}
        <li className="flex items-center">
          <Link
            to="/"
            className="hover:text-red-300 transition duration-300"
          >
            Home
          </Link>
        </li>

        {pathnames.map((name, index) => {
          const routeTo = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;

          const label = name
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l) => l.toUpperCase());

          return (
            <li key={routeTo} className="flex items-center gap-2">
              <ChevronRightIcon className="w-4 h-4 text-white/70" />

              {isLast ? (
                <span className="text-red-300 font-semibold">
                  {label}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className="hover:text-red-300 transition duration-300"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
