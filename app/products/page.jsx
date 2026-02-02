import Image from "next/image";
import Link from "next/link";

const Products = async () => {
  const products = await fetch("http://localhost:3000/api/products");
  const wands = await products.json();

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 mb-4 p-6 bg-gray-100 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
        {wands.map((wand) => (
          <div
            key={wand?.id}
            className="flex flex-col bg-white/60 border border-white/20 shadow-2xl rounded-2xl p-6 backdrop-blur-2xl h-full transition-transform hover:-translate-y-1"
          >
            <Image
              className="w-full h-56 object-cover rounded-xl"
              width={500}
              height={500}
              src={wand?.image}
              alt="wand image"
            />
            <div className="flex flex-col flex-grow">
              <h3 className="mt-4 font-semibold text-lg tracking-tight">
                {wand?.name}
              </h3>
              <p className="text-sm text-black/50 leading-relaxed mt-2 mb-4 line-clamp-3">
                {wand?.description}
              </p>
              <div className="mt-auto">
                <Link href={`/products/${wand.slug}`}>
                  <button className="w-full block bg-blue-600 text-white font-bold px-4 py-2 cursor-pointer hover:bg-blue-400 active:scale-95 transition-all duration-300 rounded-2xl">
                    Buy Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
