const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  ];
  const main = document.querySelector('.image-gallery');

  const fullview = document.createElement('div');
  fullview.classList = 'fullview';

  let preview = document.createElement('ul');
  preview.classList = 'preview';
  main.append(fullview,preview);
  
  const image = document.createElement('img');
  image.classList = 'fullview-image';
  image.setAttribute('src','img/fullview-1.jpeg');
  image.setAttribute('alt', 'alt text 1');
  fullview.append(image);

function createLi({preview,fullview,alt}) {
    const li = document.createElement('li');
    let img = document.createElement('img');
    img.classList = 'preview-image';
    img.setAttribute('src', preview);
    img.setAttribute('alt',alt);
    img.setAttribute('data-fullview',fullview)
    li.append(img);
    return li;
}

function getElements(galleryItems) {
    const elements = [];

    galleryItems.forEach(li => {
        const el = createLi(li);
        elements.push(el)
    });
    return elements;
}

const elements = getElements(galleryItems);
preview.append(...elements);


function onClick(e){
     if(e.target.parentNode.nodeName=='LI'){
        let imageSrc = document.querySelector('.fullview-image');
        imageSrc.src = e.target.dataset.fullview;
        imageSrc.alt = e.target.alt;
        e.target.classList.add('opacity');
     }
    setTimeout(()=>{
        e.target.classList.remove('opacity');
    },300);
}

main.addEventListener('click',onClick);



