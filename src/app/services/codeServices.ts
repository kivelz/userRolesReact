import axios from "axios";
import Code from "../types/code";

const apiClient = axios.create({
  baseURL: "https://restapi289-sandbox.mxapps.io/rest/restapi/v1",
  headers: {
    "Content-type": "application/json",
  },
  auth: {
    username:'demo_administrator',
    password:'avGO4bCqQ9ME'
  }
});

const findAll = async () => {
  const response = await apiClient.get<Code[]>("/code");
  return response.data;
}

const findById = async (id: any) => {
  const response = await apiClient.get<Code>(`/code/${id}`);
  return response.data;
}

const findByTitle = async (title: string) => {
  const response = await apiClient.get<Code[]>(`/code?title=${title}`);
  return response.data;
}

const create = async ({ title, description }: Code) => {
  const response = await apiClient.post<any>("/code", { title, description });
  return response.data;
}

const update = async (id: any, { title, description, published }: Code) => {
  const response = await apiClient.put<any>(`/code/${id}`, { title, description, published });
  return response.data;
}

const deleteById = async (id: any) => {
  const response = await apiClient.delete<any>(`/code/${id}`);
  return response.data;
}

const deleteAll = async () => {
  const response = await apiClient.delete<any>("/code");
  return response.data;
}

const CodeService = {
  findAll,
  findById,
  findByTitle,
  create,
  update,
  deleteById,
  deleteAll
}

export default CodeService;