import axios from 'axios'

const USER_API_URL = 'http://localhost:5000'

class ProfileData {

    retrieveProfile() {
        return axios.get(`${USER_API_URL}/profile`);
    }
    retrieveOneProfile(id) {
        return axios.get(`${USER_API_URL}/profile/${id}`);
    }

    deleteProfile(id) {
        return axios.delete(`${USER_API_URL}/profile/${id}`);
    }

    updateProfile(id, profile) {
        return axios.put(`${USER_API_URL}/profile/${id}`, profile);
    }

    createProfile(profile) {
        return axios.post(`${USER_API_URL}/add-profile`, profile);
    }   
}

export default new ProfileData()