let container=document.querySelector('.container');
let input =document.querySelector(`.input-id`);
let result=document.querySelector('.js-result');
let form=document.querySelector('.search-form');

let userBtn=document.querySelector('.js-users');

let addForm=document.querySelector('.add-form');
let nameInput=document.querySelector('.input-name');
let ageInput=document.querySelector('.input-age');

let removeForm=document.querySelector('.remove-form');
let inputIdRemove=document.querySelector('.input-id-remove');
let removeBtn=document.querySelector('.js-remove-btn');

let updateForm=document.querySelector('.update-form');
let updateId=document.querySelector('.input-id-update');
let updateName=document.querySelector('.input-name-update');
let updateAge=document.querySelector('.input-age-udate');

let clearBtn=document.querySelector('.clear-btn');
form.addEventListener('submit',preventDefSear);
userBtn.addEventListener('click',getAllUsers);
addForm.addEventListener('submit',preventDefAdd)
removeForm.addEventListener('submit',preventRemoveDef);
updateForm.addEventListener('submit',preventUpdateDef)
clearBtn.addEventListener('click', ()=>{result.innerHTML=' '})

function preventDefSear(e){
  e.preventDefault();
  let id=input.value;

  getUserById(id);

  e.target.reset();
}

function preventDefAdd(e){
e.preventDefault();

let name=nameInput.value;
let age=ageInput.value;

addUser(name,+age);

e.target.reset();

}

function preventRemoveDef(e){
e.preventDefault();
let id=input.value;

removeUser(id);


e.target.reset();
}

function preventUpdateDef(e){
e.preventDefault();

let id=updateId.value;
let name=updateName.value;
let age=updateAge.value;
let user={
  name:name,
  age:age
}

updateUser(id,user);
e.target.reset();
}

function getAllUsers(){
  fetch(`https://test-users-api.herokuapp.com/users/`)
  .then(response=>{
    if(response.ok) return response.json();

    throw new Error('err'+response.statusText);
  })
  .then(date=>{
    let arr=date[`data`];
    
    let user=arr.forEach(element => {
      result.innerHTML+=JSON.stringify(element);
    });

  })
}

function getUserById(id){
  fetch(`https://test-users-api.herokuapp.com/users/${id}`)
  .then(response=>{
    if(response.ok) return response.json();
    throw new Error('err'+response.statusText);
  })
  .then(date=>{
    let user=date[`data`];
    result.innerHTML+=JSON.stringify(user);
  })
}

function addUser(name,age){
  let newUser={
    name:name,
    age:age,
  };
 
  fetch('https://test-users-api.herokuapp.com/users/',{
    method:'POST',
    body:JSON.stringify(newUser),
    headers:{
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response=>response.json())
  .then(data=>{
    let user=data[`data`];
    result.innerHTML+=JSON.stringify(user);
  })
  .catch(error=>console.log('ERROR'+error));
}

function removeUser(id){
fetch(`https://test-users-api.herokuapp.com/users/${id}`,{
  method:'DELETE'
})
.then(()=>alert(`Success`))
.catch(error=>console.log('ERROR'+error));
}
function updateUser(id,user){
fetch(`https://test-users-api.herokuapp.com/users/${id}`,{
  method:'PUT',
  body:JSON.stringify(user),
  headers:{
    "Content-type": "application/json; charset=UTF-8"
  }
})
.then(response=>response.json())
.then(data=>{
  let user=data[`data`];
  result.innerHTML+=JSON.stringify(user);
})
.catch(error=>console.log('ERROR'+error))
}