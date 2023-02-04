import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const movies = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`).then(res => res.json());

  return (
    <main className="p-3 px-5">
      <h1 className="text-center text-3xl font-bold mb-5">All Movies</h1>
      <div className="grid gap-4 grid-cols-fluid">
        {movies.results.map(movie => (
          <div key={movie.id} className='bg-white shadow-lg mx-auto hover:scale-[1.02] transition-all duration-150'>
            <Link href={'movie/' + movie.id}>
              <Image 
                src={"https://image.tmdb.org/t/p/original"  + movie.poster_path}
                width={300}
                height={300}
                alt={movie.title}
              />
              <h1 className="p-3 text-lg font-semibold">{movie.original_title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
