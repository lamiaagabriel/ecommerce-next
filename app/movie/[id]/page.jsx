import Image from "next/image";

export default async function MovieDetails({ params: { id } }) {
  const movie = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}`, 
      { next: { revalidate: 60 } }
    ).then(res => res.json());

    function inHours(timeInMinutes) {
      const h = Math.floor(parseInt(timeInMinutes) / 60);
      const m = parseInt(timeInMinutes) % 60;
      const num = (n) => ((n < 10)? '0': '') + n;

      return num(h) + ':' + num(m);
    }
  return (
    <>
      <div className="p-3 px-5 max-w-3xl mx-auto">
        <h1 className="text-4xl font-black">{movie.original_title}</h1>

        <div className="flex justify-between items-center text-slate-500 pt-2 pb-4">
          <div className="text-sm">
            <p>{movie.release_date}</p>
            <p>Runtime: <span className="font-mono">{inHours(movie.runtime)}</span>h</p>
          </div>
          <p className="text-sm bg-green-600 inline-block px-3 py-2 text-white ">{movie.status}</p>
        </div>

        <Image 
          src={"https://image.tmdb.org/t/p/original"  + movie.backdrop_path}
          width={1000}
          height={1000}
          alt={movie.title}
          className="w-full" 
          />
        <p className="py-2 font-semibold">{movie.overview}</p>
      </div>
    </>
  )
}
