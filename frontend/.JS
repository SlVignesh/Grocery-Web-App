const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "vegtables",
    price: 119,
    colors: [
      {
        code: "black",
        img: "https://www.simplotfoods.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F0dkgxhks0leg%2F4LaYoCoepR6ZwEkAmQFh2F%2Fe82fa8e3c87f0e4cdb3e914b3e766fa0%2Fblog-large-2020veg.jpg%3Ffm%3Dwebp&w=1920&q=75",
      },
      {
        code: "darkblue",
        img: "https://static.vecteezy.com/system/resources/thumbnails/044/771/696/small_2x/a-basket-brimming-with-vegetables-free-png.png",
      },
    ],
  },
  {
    id: 2,
    title: "fruits",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "https://i.ndtvimg.com/i/2017-02/fruits-and-vegetables_650x366_41486465566.jpg?im=FaceCrop,algorithm=dnn,width=345,height=250",
      },
      {
        code: "green",
        img: "https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "juices",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "https://png.pngtree.com/thumb_back/fw800/background/20240519/pngtree-juicy-burst-fruit-juice-splash-with-whirling-fruits-image_15797284.jpg",
      },
      {
        code: "green",
        img: "https://static.vecteezy.com/system/resources/previews/030/520/201/non_2x/juice-and-healthy-fruits-photo.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "fresh vegtables",
    price: 129,
    colors: [
      {
        code: "black",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIw1RKvGvK5ogAQaaPGM6u3KyIG1M2e-fuTs-At31bNUhK3zcrj-7geFmCBuh31UsBC4w&usqp=CAU",
      },
      {
        code: "lightgray",
        img: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "https://content.dhhs.vic.gov.au/sites/default/files/fruit-and-veg_1050x600.jpg",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1097,h_617,x_0,y_0/c_fill,w_752,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/643188-gettyimages-153946385-ca1ccfaad9be44325afc434b305adc0d.jpg",
      },
      {
        code: "black",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHfuWDrOKKXNYEcP2VyG67zQFsPZR6spHCks_gx7d4wRRINUUvrA8twUBkT7A4sGEbzs&usqp=CAU",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
