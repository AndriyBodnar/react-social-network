import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "57368bc4-d48a-40e2-a8d3-b15cab860ea4",
  },
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => response.data);
};

export const authMe = () => {
  return instance.get(`auth/me`).then((response) => response.data);
};

export const followUser = (id) => {
  return instance
    .post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    .then((response) => response.data);
};

export const unfollowUser = (id) => {
  return instance
    .delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`)
    .then((response) => response.data);
};
