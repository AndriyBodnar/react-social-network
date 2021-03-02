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
  return instance.post(`follow/${id}`).then((response) => response.data);
};

export const unfollowUser = (id) => {
  return instance.delete(`follow/${id}`).then((response) => response.data);
};

export const getProfile = (id) => {
  return profileAPI.getProfile(id);
};

export const profileAPI = {
  getProfile(id) {
    return instance.get(`profile/${id}`);
  },
  getStatus(id) {
    return instance.get(`profile/status/${id}`);
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status: status });
  },
};

// axios
// .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
// .then((response) => {
//   this.props.setUserProfile(response.data);
// });
