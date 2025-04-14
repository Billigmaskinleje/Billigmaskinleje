import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-black">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-black mb-6">
          Billigmaskinleje
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          Din pålidelige partner for maskinleje i Danmark
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Bold Weight</h2>
            <p className="font-bold">
              Dette er fed tekst med Helvetica Now Text Bold.
            </p>
            <p className="font-bold italic mt-4">
              Dette er fed kursiv tekst med Helvetica Now Text Bold Italic.
            </p>
          </div>
          <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-2xl font-black mb-4">Black Weight</h2>
            <p className="font-black">
              Dette er ekstra fed tekst med Helvetica Now Text Black.
            </p>
            <p className="font-black italic mt-4">
              Dette er ekstra fed kursiv tekst med Helvetica Now Text Black
              Italic.
            </p>
          </div>
        </div>
        <div className="p-4 bg-gray-200 dark:bg-gray-900 rounded-lg">
          <code className="text-sm">Font family: Helvetica Now Text</code>
        </div>
      </div>
    </main>
  );
}
