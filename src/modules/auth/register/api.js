import { api } from "@/libs";

export const registerRequest = async (payload) => {
  const { data } = await api.post("/auth/register", payload);
  return data;
};
