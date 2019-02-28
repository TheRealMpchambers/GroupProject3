import axios from "axios";

export default {

    getDirections: function() {
        return axios.get("/api/rooms");
    },

    saveDirections: function(directions) {
        return axios.post("/api/rooms", directions)
    }

};

