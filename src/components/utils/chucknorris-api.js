import axios from 'axios';

const BASE_URL = 'https://api.football-data.org/';

var config = {
  headers: {'X-Auth-Token': PREMIER_LEAGUE}
};


function getFootballData(){
  const url = `${BASE_URL}/v2/competitions/2021/matches`;
  return axios.get(url, config)
          .then(response => response.data);

}

export {getFootballData};
