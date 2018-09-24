import axios from 'axios';
//import { getAccessToken } from './AuthService';

const BASE_URL = 'http://api.football-data.org/';

var config = {
  headers: {'X-Auth-Token': '6e6322fc020e47c3b0ccac3c371a70a7'}
};


function getFootballData(){
  const url = `${BASE_URL}/v2/competitions/2021/matches`;
  return axios.get(url, config)
          .then(response => response.data);

}

export {getFootballData};