import axios from "axios";

const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (page, name) => {
  const response = await axios.get(API_URL, {
    params: {
      page,
      name,
    },
  });
  return response.data;
};

export const getCharacterById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};
