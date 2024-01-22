const { default: axios } = require("axios");

const getGooglePlace = (category,radius,lat,lng) => axios.get('/api/google-place?'+
'category='+category+'&radius='+radius+'&lat='+lat+'&lng='+lng
// 'category='+category+'&radius='+radius+'&lat=40.7128&lng=-74.006'
//'category='+category+'&radius='+radius+'&lat=16.8794&lng=96.142'
// 'category=indian&radius=1000&lat=40.7128&lng=-74.006'
//lat: 16.8794227 lng:96.1421051
);

const getSearchResult = (query) => axios.get(`/api/search?query=${query}`);

export default {
    getGooglePlace,
    getSearchResult
}