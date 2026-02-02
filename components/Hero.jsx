import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 pt-16 pb-24 text-center md:pt-32">
      <div className="mb-6 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
        <Sparkles className="mr-2 h-4 w-4" />
        <span>New Collection Available</span>
      </div>

      <h1 className="text-6xl font-extrabold tracking-tighter text-gray-900 md:text-8xl">
        ARCANE
      </h1>

      <h2 className="mt-4 max-w-2xl text-2xl font-medium text-gray-500 md:text-3xl">
        Artifacts of Power for the Modern Wielder
      </h2>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/products"
          className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-8 text-base font-bold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200"
        >
          Buy Now
        </Link>
        <Link
          href="#learn-more"
          className="group inline-flex h-12 items-center justify-center rounded-xl bg-white border border-gray-200 px-8 text-base font-semibold text-gray-700 transition-all hover:border-gray-300 hover:bg-gray-50"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="relative mt-16 w-full max-w-5xl">
        <div className="absolute -inset-1 -z-10 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 opacity-50 blur-2xl"></div>

        <Image
          src="https://images.unsplash.com/photo-1579198242227-1df38c4bfd01?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Decorated Magic Wand"
          className="w-full rounded-3xl shadow-2xl ring-1 ring-gray-900/5 transition-transform duration-500 hover:scale-[1.01]"
          height={600}
          width={2070}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
