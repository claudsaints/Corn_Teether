import { tmdb } from "./api"

export default new class Movie{
    async buscar(query:string | undefined,fun:CallableFunction) {
      await tmdb({
        method: 'get',
        url: `https://api.themoviedb.org/3/search/movie`,
        params: {
          query: query,
          language: 'pt-BR'

        }
      }).then((res) => {
          fun(res.data.results)
      }).catch((err)=> {
        console.log(err)

      })

    }
    async buscar_id(id:string | undefined,fun:CallableFunction) {
      await tmdb.get(`https://api.themoviedb.org/3/movie/${id}?language=pt-BR`).then((res) => {
          fun(res.data)
      }).catch((err)=> {
        console.log(err)

      })

    }
    async top_movie(fun:CallableFunction){
        await tmdb.get(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&page=1`)
        .then((res) => {
          fun(res.data.results);
        }).catch((err) => {
          console.log(err);
        })

    }


}