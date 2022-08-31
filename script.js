const input = document.getElementById("input");
const form = document.getElementById("form");
const contentContainer = document.getElementById("contentContainer");
const img = document.getElementById("img");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const profileName = document.getElementById("profileName");
const reposNumber = document.getElementById("reposNumber");
const repoHeader = document.getElementById("repoHeader");
const bio = document.getElementById("bio");
const repos = document.getElementById("repos");




form.addEventListener('submit',(e)=>{
    e.preventDefault();
        fetch(`https://api.github.com/users/${input.value}`)
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          
          
          img.src = `https://avatars.githubusercontent.com/u/${data.id}?v=4`;
          contentContainer.href = `https://github.com/${data.login}`;
          profileName.innerHTML = data.name;
          bio.innerHTML = data.bio
          followers.innerHTML = "Followers : "+data.followers;
          following.innerHTML = "Following : "+data.following;
          reposNumber.innerHTML = "Repos : "+data.public_repos;
          contentContainer.style.background="#4F26A1";
          img.style.border="10px solid #2D2C7B";
          repoHeader.innerHTML = "Repos :"
          
          //
          getRepo();
            input.value=""
        });
        
    
})
function getRepo(){
    
    fetch(`https://api.github.com/users/${input.value}/repos`)
  .then(function(response) {
    return response.json();
  })
  .then(function(repodata) {
    
    
    
    for(let i=0;i<repodata.length;i++){
        const a = document.createElement("a");
        a.id = "eachRepo"
        repos.appendChild(a);
        a.innerHTML = repodata[i].name;
        a.src = `https://github.com/bradtraversy/${a.innerHTML}`;
        form.addEventListener("submit" , (e)=>{
            e.preventDefault;
            a.remove();
        }) 
        
    }
    
    });
    
}
