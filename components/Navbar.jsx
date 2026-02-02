import { ShoppingCart } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-8 flex items-center justify-between">
      <Link href={"/"}>
        {" "}
        <h1 className="text-3xl font-semibold tracking-tight">ARCANE</h1>
      </Link>
      <div className="flex items-center gap-2 cursor-pointer bg-black/5 p-3 rounded-xl active:scale-95 transition-all duration-150">
        <p>Cart </p>
        <span>
          <ShoppingCart />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
