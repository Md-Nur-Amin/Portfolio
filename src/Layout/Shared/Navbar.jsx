
import { Link } from "react-router-dom";

const navItemsLeft = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
];

const navItemsRight = [
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
];

const Navbar = () => {
    return (
        <>
            {/* Top-left corner buttons */}
            <div className="fixed top-3 left-3 z-50 flex gap-4">
                {navItemsLeft.map(({ to, label }, index) => (
                    <div key={index} className="flex flex-col items-center group">
                        <Link
                            to={to}
                            className="btn btn-circle btn-xs border border-[#eae6db] bg-transparent hover:bg-[#eae6db] transition"
                            aria-label={label}
                        />
                        <span className="text-xs mt-1 text-[#eae6db] opacity-70 group-hover:opacity-100 transition">
                            {label}
                        </span>
                    </div>
                ))}
            </div>

            {/* Top-right corner buttons */}
            <div className="fixed top-3 right-3 z-50 flex gap-4">
                {navItemsRight.map(({ to, label }, index) => (
                    <div key={index} className="flex flex-col items-center group">
                        <Link
                            to={to}
                            className={`btn btn-circle btn-xs border border-[#eae6db] ${
                                label === "Contact"
                                    ? "bg-[#eae6db] hover:bg-[#cfcac0]"
                                    : "bg-transparent hover:bg-[#eae6db]"
                            } transition`}
                            aria-label={label}
                        />
                        <span className="text-xs mt-1 text-[#eae6db] opacity-70 group-hover:opacity-100 transition">
                            {label}
                        </span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Navbar;
