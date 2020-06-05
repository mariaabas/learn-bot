const axios = require('axios')


class RedditRepository {

    getInformationFromReddit(message) {
        axios
            .get(`https://reddit.com/r/${message}/top.json?limit=10`)
            .then( response => {
                const data = response.data.data;
                if(data.children.length < 1) {
                    return "The message couldn't be found";
                }
                const link = 'htpps://reddit.com/'${data.children[0].data.permalink};
                return link;
            })
            .catch(error => console.log(error));

    }

}