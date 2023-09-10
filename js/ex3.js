//================3================
const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];


  const ulList  = document.querySelector('.gallery')

  function createGallery(arr) {
  const gallery = arr.map(({ url, alt}) =>  
        `<li class="img" >
            <img src="${url}" alt="${alt}" width="300">    
        </li>`
    ).join("");

  ulList.insertAdjacentHTML("beforeend", gallery);
}

createGallery(images);

