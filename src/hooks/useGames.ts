import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
  image_background: string
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number,
  results: Game[]
}
const useGames = () => {

  //get Game type array
  const [games, setGames] = useState<Game[]>([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false)

  //start useEffect fetch data
  useEffect(() => {
    setLoading(true);

    //abort controller to cancel request
    const controller = new AbortController();
    //add response type(Generic) to axios get method
    apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => {
        setGames(res.data.results)
        setLoading(false);
      })

      .catch(err => {
        //check if error is CanceledError=type of axios error
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoading(false);
      })
    //abort request
    return () => controller.abort();
  }, [])
  //for use games and error return values
  return { games, error, loading }
};

export default useGames;