const github = new GitHub;
const ui = new UI;
const input = document.getElementById('searchInput');
input.addEventListener('keyup', e => {
    const userName = e.target.value;
    if(userName !== ''){
     github.getUser(userName)
     .then( data =>{
        if(data.profile.message ==="Not Found" ){

        }else{
          ui.showProfile(data.profile)
        }
     }) 
    }else{

    }
})