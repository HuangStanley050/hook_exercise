import { useState, useEffect } from "react";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchData] = useState(null);

  // fetch("https://swapi.co/api/people")
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setFetchData(data);
        // const selectedCharacters = charData.results.slice(0, 5);

        // setLoadedChars(
        //   selectedCharacters.map((char, index) => ({
        //     name: char.name,
        //     id: index + 1
        //   }))
        // );
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies);

  return [isLoading, fetchedData];
};
