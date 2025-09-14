
export async function getPokeList() {
    return fetch("https://pokeapi.co/api/v2/pokemon?limit=200&offset=0")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Nenhum pokemon encontrado.");
      }
      return response.json();
    })
    .then((data) => {
      return Promise.all(
        data.results.map((p:{ name: string; url: string}) =>
          fetch(p.url).then((res) => res.json())
        )
      );
    })
    .catch((error: any) => {
      console.log(error);
    });
   
}