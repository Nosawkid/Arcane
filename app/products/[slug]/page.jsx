import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import wands from "../../api/products/db";

const ProductSlug = async ({ params }) => {
  // 2. Await params (Standard in Next.js 16)
  const { slug } = await params;

  // 3. Find the wand directly from the array instead of fetching
  // Make sure your database objects actually have a 'slug' property!
  const wand = wands.find((w) => w.slug === slug);

  // 4. Handle invalid slugs (404)
  if (!wand) {
    notFound();
  }

  const features = [
    { label: "Tier", value: wand.tier },
    { label: "Power", value: wand.power },
    { label: "Battles Won", value: wand.battlesWon },
    { label: "Length", value: wand.length },
    { label: "Origin", value: wand.origin },
  ];

  return (
    <div className="mx-auto mt-4 w-full max-w-4xl p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-4xl font-semibold text-gray-900">{wand.name}</h1>
        <Link href={"/order"}>
          <button className="cursor-pointer rounded-lg bg-blue-600 px-6 py-2 font-bold text-white transition hover:bg-blue-700">
            Order Now
          </button>
        </Link>
      </div>

      {/* Image */}
      <div className="relative w-full overflow-hidden rounded-3xl bg-gray-100">
        <Image
          src={wand.image}
          alt={wand.name}
          height={500}
          width={2070}
          className="h-[400px] w-full object-cover"
        />
      </div>

      <p className="mt-6 mb-8 text-2xl font-medium leading-relaxed text-gray-500">
        {wand.description}
      </p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* LEFT COLUMN: Dotted Linked List Features */}
        <div>
          <h3 className="mb-6 text-xl font-bold text-gray-900">
            Specifications
          </h3>
          <div className="ml-4 border-l-2 border-dotted border-gray-300 space-y-8">
            {features.map((feature) => (
              <div key={feature.label} className="relative pl-8">
                {/* The Dot */}
                <div className="absolute top-1.5 -left-[7px] h-3 w-3 rounded-full bg-blue-600 ring-4 ring-white"></div>

                <div className="text-sm">
                  <span className="block font-bold text-gray-900">
                    {feature.label}
                  </span>
                  <span className="block text-gray-500">{feature.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-bold text-gray-900">
            Notable Wielders
          </h3>
          <div className="flex flex-wrap gap-2">
            {wand.famousUsers.map((user, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800"
              >
                {user}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSlug;
