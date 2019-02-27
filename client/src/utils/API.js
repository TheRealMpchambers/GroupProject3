import axios from "axios";

export default {

    getDirections: function() {
        return axios.get("/api");
    },

    saveDirections: function(directions) {
        return axios.post("/api", directions)
    }

};