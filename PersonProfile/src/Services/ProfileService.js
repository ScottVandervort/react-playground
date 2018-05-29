export default class ProfileService {

    getUser () {

        return fetch("https://randomuser.me/api/")
            .then(  function(response) {
                if(response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(  function(response) {
                if (response.results.length > 0)
                    return response.results[0];
                else
                    throw new Error('User not found.');
            });
    }        
}