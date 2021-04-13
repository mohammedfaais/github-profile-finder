class GitHub {
    constructor(){
        this.client_id = '019948aaf028aff44957';
        this.client_secret = 'f1d9f6dcef3cc7d223d07723c512e6780bcb5954';

    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return{
            profile
        }
    }

    
}