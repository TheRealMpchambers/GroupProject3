import axios from "axios";

export default {

    getDirections: function() {
        return axios.get("/api/rooms");
    },

    getSearches: function() {
        return axios.get("/api/searches")
    },

    submitSearch: function(search) {
        return axios.post("/api/searches", search)
    }

};

