import axios from "axios";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${Cookies.get("token")}`,
  },
});

export async function signin(data) {
  try {
    const response = await axiosInstance.post(`/user/signin`, data);
    // Armazenar o token no cookie após o login
    if (response.data) {
      Cookies.set("token", response.data);
      console.debug({
        message: "token saved on cookie",
        ...response.data.token,
      });
    }
    return response;
  } catch (error) {
    console.error("Signin error:", error.response?.data || error.message);
    throw error;
  }
}

export async function signout() {
  try {
    // Remover o token dos cookies
    Cookies.remove("token");
    console.debug("Signout successful");
    // Opcional: redirecionar o usuário ou fazer outras ações após logout
  } catch (error) {
    console.error("Signout error:", error.message);
    throw error;
  }
}

// Função para validar o token do usuário
export async function validateToken() {
  try {
    const response = await axiosInstance.get(`/`);
    console.debug({ message: "validateToken response", ...response });
    return response;
  } catch (error) {
    console.error(
      "Token validation error:",
      error.response?.data || error.message,
    );
    throw error;
  }
}

// Função para buscar personagens com base em um nome parcial
export const getCharacter = async (name = "Smith") => {
  try {
    const response = await axiosInstance.get(`/character`, {
      params: { name }, // Passando o nome como query parameter
    });
    console.debug({ message: "getCharacter response", ...response });
    return response;
  } catch (error) {
    console.error(
      "Character fetch error:",
      error.response?.data || error.message,
    );
    throw error;
  }
};

export async function createCharacter(data) {
  try {
    const response = await axiosInstance.post(`/character`, data);
    console.debug({ message: "createCharacter response", ...response });
    return response;
  } catch (error) {
    console.error(
      "Character creation error:",
      error.response?.data || error.message,
    );
    throw error;
  }
}
