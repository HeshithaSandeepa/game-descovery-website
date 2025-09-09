import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
const useGames = () => {
  interface Game {
    id: number,
    name: string
    background_image: string
  }

  interface FetchGamesResponse {
    count: number,
    results: Game[]
  }                                 //get Game type array
  const [games, setGames] = useState<Game[]>([]);

  const [error, setError] = useState("");

  //start useEffect fetch data
  useEffect(() => {
    //abort controller to cancel request
    const controller = new AbortController();
    //add response type(Generic) to axios get method
    apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
      .then(res => {
        setGames(res.data.results)
      })

      .catch(err => {
        //check if error is CanceledError=type of axios error
        if (err instanceof CanceledError) return;
        setError(err.message)
      })
    //abort request
    return () => controller.abort();
  }, [])
  //for use games and error return values
  return { games, error };
};

export default useGames;