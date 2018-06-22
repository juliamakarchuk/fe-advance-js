const posts = [
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }

];

const section = document.querySelector('.post');
const elements = getElements(posts);

section.append(...elements);

function getElements(posts) {
    const elements = [];

    posts.forEach(note => {
        const el = createCards(note);
        elements.push(el)
    });

    return elements;
}

function createCards({img,title,text,link}) {
    const note = document.createElement('div');

    let image = document.createElement('img');
    image.classList.add('post__image');
    image.setAttribute('src', img);

    let h1 = document.createElement('h1');
    h1.textContent=title;
    h1.classList.add('post__title');

    let p = document.createElement('p');
    p.textContent = text;
    p.classList.add('post__text');

    let a = document.createElement('a');
    a.setAttribute('href',link);
    a.classList.add('button');
    a.textContent="READ MORE"
    note.append(image,h1,p,a);
    return note;
}

