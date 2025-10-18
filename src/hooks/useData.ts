// for side panel  ex: youtube genre list

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface FetchResponses<T> {
  count: number
  results: T[]

}

const useData = <T>(endpoint: string) => {

  //get Game type array
  const [data, setData] = useState<T[]>([]);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false)

  //start useEffect fetch data
  useEffect(() => {
    setLoading(true);

    //abort controller to cancel request
    const controller = new AbortController();
    //add response type(Generic) to axios get method
    apiClient.get<FetchResponses<T>>(endpoint, { signal: controller.signal })
      .then(res => {
        setData(res.data.results)
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
  return { data, error, loading }
};

export default useData;