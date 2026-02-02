import Image from "next/image";

const Featured = () => {
  return (
    <section
      id="learn-more"
      className="grid grid-cols-1 md:grid-cols-2 items-center mx-auto max-w-6xl mt-8 p-6"
    >
      <div>
        <h3 className="text-5xl font-semibold mb-4">Chosen, Not Purchased</h3>
        <p className="text-gray-600 text-xl leading-relaxed mb-4">
          Wands are matched through arcane profiling, legacy data, and resonance
          patterns — a modern approach to an ancient craft.
        </p>
      </div>
      <Image
        width={780}
        height={720}
        className="rounded-2xl"
        src={
          "https://as1.ftcdn.net/v2/jpg/17/60/95/64/1000_F_1760956478_BCyqL1jGRAfpLkUobwHwVAoM6okOVm28.jpg"
        }
        alt="A wand placed on a table"
      />
      <Image
        className="mt-8 rounded-2xl"
        height={500}
        width={2070}
        src={
          "https://as2.ftcdn.net/v2/jpg/03/50/82/73/1000_F_350827357_HIDMq93QzMfF3V75XYs9x7WyD59IHrhO.jpg"
        }
        alt="wand on the table"
      />
      <div className="mx-4 mt-4">
        <h3 className="text-5xl font-semibold mb-4">Verified Artifacts</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          All Arcana wands are authenticated, documented, and sealed to prevent
          unstable or corrupted magic. Feels modern. Feels serious.
        </p>
      </div>
    </section>
  );
};

export default Featured;
