import movies from "../data/movies";

function MovieList() {
    return (
        movies.map((item) =>
            <div key={item.title} className="max-w bg-white shadow-lg rounded-xl p-4 m-5 flex space-x-4">
                <img
                    src={item.image}
                    alt={item.title}
                    className="w-25 h-25 object-cover rounded-md"
                />
                <div className="flex flex-col justify-between ">
                    <div>
                        <p className="pb-2">
                            <span className="font-semibold">Title:</span> {item.title}
                        </p>
                        <p className="pb-2">
                            <span className="font-semibold">Year:</span> {item.year}
                        </p>
                        <p className="pb-2">
                            <span className="font-semibold">Runtime:</span> {item.runtime}
                        </p>
                        <p className="flex items-center gap-2  pb-2">
                            <span className="font-semibold">Genres:</span>
                            {item.genres.map((genre) => <span className="bg-red-200 text-xs px-2 py-1 rounded-full">
                                {genre}
                            </span>
                            )}
                        </p>
                        <p className="pb-2">
                            <span className="font-semibold">IMDB Ratings:</span> {item.imdbRating}
                        </p>
                        <p>
                            <span className="font-semibold">IMDB Votes:</span> {item.imdbVotes}
                        </p>
                    </div>
                </div>
            </div>
        ));
}

export default MovieList;