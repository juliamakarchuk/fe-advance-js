const initialUsers = [
    { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: false },
    { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: false },
    { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];
const initialPosts = {
    "-s19a6hqce": [
        { id: "-5sgljaskg", text: "post #1", likes: 3 },
        { id: "-199hb6igr", text: "post #2", likes: 5 },
        { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
    ],
    "-qkpzenjxe": [
        { id: "-5tu69g5rf", text: "post #1", likes: 8 },
        { id: "-bje766393", text: "post #2", likes: 15 }
    ],
    "-e51cpd4di": [
        { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
        { id: "-i03pbhy3s", text: "post #2", likes: 45 }
    ],
};
function SocialBook(users=[], posts={}) {
    this.users=users;
    this.posts=posts;
    const getId = () => "-" + Math.random().toString(36).substr(2, 9);
    this.getAllUsers = function () {
        let getUsers=this.users.map(function(user){
            return user;
        })
        return getUsers;
    }
    this.getUserByLogin = function (login) {
        let findLogin = this.users.find(function (user) {
            return user.login === login;
        });
        return findLogin;
    }
    this.getUserStatus = function (userId) {
        let result;
        let findId = this.users.find(function (elem) {
            if(elem[`id`]===userId){
                if(elem[`isActive`]){
                    result=`active`;
                } else{result =`inactive`;}
            }
        })
        return result;
    }
    this.addUser=function(myUser){
        myUser.id=getId();
        myUser.isActive=false;
        this.users.push(myUser);
        return this.users;
    }
    this.removeUserById=function(userId){
        let elementIndex;
        let arr=[];
        let findAndRemove=users.find(function(elem){
            if(elem['id']===userId){
                arr=users;
                elementIndex=arr.indexOf(elem);
                users.splice(elementIndex, elementIndex);
                return users;
            }
        })
        return findAndRemove;
    }
    this.getUsersCount=function() {
        return `Количество пользователей: ${this.users.length}`;
    }
    /////////////////////////////////////////////////////////////////
    this.getUserPosts=function(userId){
        let result;
        for(const key in posts) {
            if (key === userId) {
                result = posts[key];
            }
        }
        let findPosts=result.map(function(elem){
            return elem[`text`];
        })
        return findPosts;
    }
    this.addPost=function(userId, post){
        posts[userId]=post;
        return this.posts;
    }
    this.removePost=function(userId, postId){
    let findAndRemove=posts[userId].find(function(elem){
        let postIndex;
        let arr=[];
        if(elem.id===postId){
            arr=posts[userId];
            postIndex=arr.indexOf(elem);
            posts[userId].splice(postIndex,postIndex);
            return posts[userId];
            }
        }
    )
    return findAndRemove;
    }
    this.getAllLikes=function(userId){
        let result;
        for(const key in posts){
            if(key===userId){
                result=posts[key];
            }
        }
        let accumLikes=result.map(elem=>elem.likes).reduce((acc, tweet)=>acc+tweet,0);
        return `Количество лайков:${accumLikes}`;
    }
    this.addPostLikes=function(userId, postId){
          let result;
          for(const key in posts){
              if(key===userId){
                  result=posts[key];
              }
         }
        let addLikes=result.map(elem=>({
            ...elem,
            likes:elem.likes+1
        }));
        return addLikes;
    }
    this.getPostsCount=function(userId){
        let result;
        for(const key in posts) {
            if (key === userId) {
                result = posts[key];
            }
        }
        let countPosts=result.map(elem=>elem.text);
        return `Количество постов:${countPosts.length}`;
    }
}
const manager=new SocialBook(initialUsers,initialPosts);
const myUser = { name: 'Lukas', login:`lukas12345`};
const myUser2={ name: 'Fhilip', login:`philipPhilip`};
console.log(manager.getAllUsers());
console.log(manager.getUserByLogin("mangozedog@mail.com"));
console.log(manager.getUserStatus("-qkpzenjxe"));
manager.addUser(myUser);
manager.addUser(myUser2);
manager.removeUserById("-qkpzenjxe");
console.log(manager.users);
console.log(manager.getUsersCount());
///////////////////////////////////////////////////////////////////
console.log(manager.getUserPosts("-e51cpd4di"));
console.log(manager.addPost("-667a6hqce",
        [{id: "-544jhdds", text: "post #1", likes: 544},
        {id: "-1234gdfhh", text: "post #2", likes: 23},
        {id: "1234567", text: "post #3", likes: 34}]));
manager.removePost("-667a6hqce", "-1234gdfhh");
console.log(manager.posts);
console.log(manager.getAllLikes("-667a6hqce"));
console.log(manager.addPostLikes("-667a6hqce", "-544jhdds"));
console.log(manager.getPostsCount("-667a6hqce"));