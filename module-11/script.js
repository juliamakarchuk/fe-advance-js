const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];

 let filter = {
     size:[],
     color:[],
     release_date:[]
 }

const container=document.querySelector('.js-container');
const input=document.querySelectorAll('input');
const form=document.querySelector('.js-form');
  
function preventDefault(e){
  e.preventDefault();

  filterChecked();
  filterLaptops();
  makeContent();
}

function filterChecked() {
  let checkInputs = document.querySelectorAll('input');
  let arr = Array.from(checkInputs);
  for(let checkInput of arr){
    if(checkInput.checked == true){
      for(let key in filter){
        if(checkInput.name == key){
          filter[key].push(checkInput.value);
        }
      }
    }
  }

  return filter;
}

function filterLaptops(){
  let array = [];
  array = laptops.filter(el=>el[`size`] == filter[`size`]||filter[`size`] == 0)
  .filter(el => el[`color`] == filter[`color`]||filter[`color`] == 0)
  .filter(el => el[`release_date`] == filter[`release_date`]||filter[`release_date`] == 0);
  return array;
}

function makeContent(){
  let filterItems = filterLaptops();
  if(filterItems.length==0){
    alert(`Sorry, but we don't have such a laptop`);
  }
  const source = document.querySelector('#laptop-container').innerHTML.trim();
  const template = Handlebars.compile(source);
  const markup = filterItems.reduce((acc,item)=>acc+template(item),'');
  container.innerHTML = markup;
 }

function clearForm(){
  container.innerHTML = ' ';
  filter = {
     size:[],
     color:[],
     release_date:[]
   };
}

form.addEventListener('submit', preventDefault);
form.addEventListener('reset', clearForm);
