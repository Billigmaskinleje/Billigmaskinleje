import { Star, MoreVertical, ThumbsUp, Share2 } from "lucide-react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export default function CustomerReviews() {
  return (
    <div className="custom_container mx-auto pt-[250px] pb-[253px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Left column with heading and text */}
        <div className="space-y-6">
          <h2 className={twMerge("text-60 font-black mb-4", "break-words")}>
            Hvad siger kunderne om billigmaskinleje.dk?
          </h2>

          <p
            className={twMerge(
              "text-20 tracking-normal max-w-[653px]",
              "font-medium"
            )}
          >
            Har du spørgsmål? Vi har samlet svarene på de mest almindelige
            spørgsmål, så du hurtigt kan finde den information, du har brug for.
            Uanset om du er ny kunde eller erfaren bruger, kan du her få klarhed
            over, hvordan vores maskinleje fungerer. Hvis du ikke finder svar på
            dit spørgsmål, er du altid velkommen til at kontakte os direkte.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-24">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <Star className="w-5 h-5 text-green-600 fill-green-600" />
              </div>
              <span className="text-sm font-medium">Trustpilot Review</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <div key={star} className="w-4 h-4 bg-green-600" />
                ))}
              </div>
              <span className="text-xs text-gray-600">4.8 Stars</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=24&width=24"
                width={24}
                height={24}
                alt="Google icon"
                className="rounded-full"
              />
              <span className="text-sm font-medium">Google Review</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600">4.8 Stars</span>
            </div>
          </div>
        </div>

        {/* Right column with reviews */}
        <div className="bg-white rounded-3xl border shadow-sm overflow-hidden p-[14px]">
          {/* Review 1 */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">
                  P
                </div>
                <div>
                  <h3 className="font-medium">Peter August Simonsen</h3>
                  <p className="text-sm text-gray-500">2 reviews</p>
                </div>
              </div>
              <button className="text-gray-500">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-2 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">3 months ago</span>
            </div>

            <p className="text-15 tracking-normal mb-1">
              Lejede minigraver og motorbør i forbindelse med udgravning til
              trampolin og regnbede. Super behagelig indehaver, der sørger for
              god vejledning i de lejede maskiner og byder ind med råd til de
              projekter man har gang i.
            </p>

            <button className="text-sm text-blue-600 hover:underline">
              See translation (English)
            </button>

            <div className="flex gap-4 mt-3">
              <button className="text-gray-500 flex items-center gap-1">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button className="text-gray-500 flex items-center gap-1">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Review 2 */}
          <div className="p-6 border-b">
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-medium">
                  K
                </div>
                <div>
                  <h3 className="font-medium">Kasper Conrad</h3>
                  <p className="text-sm text-gray-500">2 reviews</p>
                </div>
              </div>
              <button className="text-gray-500">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-2 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">a year ago</span>
            </div>

            <p className="text-15 tracking-normal mb-1">
              Udlejning af Flishugger gik som smurt. Jacob er hjælpsom og
              forstående hvilket gjorde processen dejlig nem. Maskinen fungerede
              som den skulle og trods dens tunge vægt, var den en ...
            </p>

            <button className="text-sm text-gray-600 hover:underline">
              More
            </button>
            <button className="text-sm text-blue-600 hover:underline ml-2">
              See translation (English)
            </button>

            <div className="flex gap-4 mt-3">
              <button className="text-gray-500 flex items-center gap-1">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button className="text-gray-500 flex items-center gap-1">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Review 3 */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-amber-700 flex items-center justify-center text-white font-medium">
                  R
                </div>
                <div>
                  <h3 className="font-medium">Rasmus Bo Jansen</h3>
                  <p className="text-sm text-gray-500">1 review</p>
                </div>
              </div>
              <button className="text-gray-500">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-2 flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">7 months ago</span>
            </div>

            <p className="text-15 tracking-normal mb-1">
              Super nemt og dejligt billigt. Meget venlig og flexibel udlejer.
              God kvalitet på udstyr, ingen problemer.
            </p>

            <button className="text-sm text-blue-600 hover:underline">
              See translation (English)
            </button>

            <div className="flex gap-4 mt-3">
              <button className="text-gray-500 flex items-center gap-1">
                <ThumbsUp className="w-5 h-5" />
              </button>
              <button className="text-gray-500 flex items-center gap-1">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
