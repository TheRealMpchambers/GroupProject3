import axios from "axios";

export default {

    getDirections: function(query) {
        return axios.get("/api/rooms/" + query);
    },

    saveDirections: function(directions) {
        return axios.post("/api/rooms", directions)
    }

};

