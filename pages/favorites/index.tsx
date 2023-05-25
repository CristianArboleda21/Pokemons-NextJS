import { Layout } from "@/components/layouts"
import { FavoritesPokemons } from "@/components/pokemon";
import { NotFavorites } from "@/components/ui";
import { localFavorites } from "@/utils";
import { useEffect, useState } from "react";

const FavoritosPage = () => {

  const [favorites, setfavorites] = useState<number[]>([]);

  useEffect(() => {
    setfavorites( localFavorites.pokemons() );
  }, [])
  

  return (
    <Layout title="Favoritos">
        {
          favorites.length === 0 
          ? ( <NotFavorites/> ) 
          : ( <FavoritesPokemons pokemons={ favorites }/> ) 
        } 
    </Layout>
  )
}


export default FavoritosPage;