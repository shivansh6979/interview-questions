console.log('before')

getUser(1,(user) =>{
    console.log('USERS',user)
    //get repositories
    getrepositories('mosh',(REPO) =>{
        console.log('REPOSITORIES :',REPO)
    })
    
})

function getUser(id,callback){
    setTimeout(() => {
         console.log('reading a user from database')
         callback({id : id , githubUsername :'mosh'})
    },2000)

}


console.log('after')

function getrepositories(username,callback){
    setTimeout(() => {
         console.log('calling github API')
         callback(['repo1', 'repo2', 'repo3']) ;
    },2000)
   
}