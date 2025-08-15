import movies from "../data/movies.jsx";

const GenreChip = ({ label }) => (
  <span className="inline-flex items-center rounded-full bg-rose-100 px-3 py-1 text-xs font-medium text-rose-700">
    {label}
  </span>
);

export default function MovieList() {
  return (
    <section className="min-h-screen bg-neutral-50 py-12">
      <div className="mx-auto max-w-lg px-4">
        <h1 className="mb-8 text-center text-3xl font-bold tracking-tight text-neutral-900">
          Movie List Section
        </h1>

        <div className="space-y-8">
          {movies.map((movie, idx) => (
            <article
              key={idx}
              className="flex items-start gap-6 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5"
            >
              {/* รูปภาพ */}
              <img
                src={movie.image}
                alt={movie.title}
                className="h-[100px] w-[102px] flex-none rounded-xl object-cover"
              />

              {/* รายละเอียด */}
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-semibold text-neutral-900">
                  Title: <span className="font-normal">{movie.title}</span>
                </h2>

                <div className="mt-2 space-y-1 text-sm text-neutral-700">
                  <p>
                    <span className="font-medium">Year:</span> {movie.year}
                  </p>
                  <p>
                    <span className="font-medium">Runtime:</span> {movie.runtime}
                  </p>

                  {/* Genres เป็นชิป */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium">Genres:</span>
                    {movie.genres.map((g) => (
                      <GenreChip key={g} label={g} />
                    ))}
                  </div>

                  <p className="pt-1">
                    <span className="font-medium">IMDB Ratings:</span>{" "}
                    {movie.imdbRating}
                  </p>
                  <p>
                    <span className="font-medium">IMDB Votes:</span>{" "}
                    {movie.imdbVotes}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
