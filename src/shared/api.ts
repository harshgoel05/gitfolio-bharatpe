import axios from "axios";
import { API_ENDPOINTS } from "./constant";

export async function getUserDetails(username : string){
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.USER_DETAILS(username));
   return data;
}
export async function getUserRepos(username : string,page : number){
   let query = "?";
   if(page){
      query = query  + "page="+ page
   }
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.USER_REPOS(username)+query);
   return data;
}
export async function getFewUserRepos(username : string,per_page : number){
   let query = "?";
   if(per_page){
      query = query  + "per_page="+ per_page
   }
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.USER_REPOS(username)+query);
   return data;
}

export async function getUser(page : number){
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.LIST_USERS + "?since=" + page);
   return data;
}
export async function searchUsers(searchQuery : string){
   const {data} = await  axios.get( API_ENDPOINTS.BASE + API_ENDPOINTS.SEARCH_USERS + searchQuery);
   return data.items;
}

export async function getRepoDetails(fullname : string){
   const {data} = await  axios.get(API_ENDPOINTS.BASE + API_ENDPOINTS.REPOS + "/" +  fullname);
   return data;
}