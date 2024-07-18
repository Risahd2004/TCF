// Create the HTML elements
const html = document.documentElement;
const head = document.createElement('head');
const body = document.createElement('body');
const header = document.createElement('header');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
const main = document.createElement('main');
const orderNowDiv = document.createElement('div');
const h1 = document.createElement('h1');
const productContainer = document.createElement('div');
const footer = document.createElement('footer');

// Add attributes and content to the elements
document.documentElement.lang = 'en';
const metaCharset = document.createElement('meta');
metaCharset.setAttribute('charset', 'UTF-8');
head.appendChild(metaCharset);

const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0';
head.appendChild(metaViewport);

const linkStylesheet = document.createElement('link');
linkStylesheet.rel = 'stylesheet';
linkStylesheet.href = 'style.css';
head.appendChild(linkStylesheet);

const title = document.createElement('title');
title.textContent = 'The Cake Factory';
head.appendChild(title);

const logoDiv = document.createElement('div');
logoDiv.className = 'logo';
const logoImg = document.createElement('img');
logoImg.src = 'images/logos/cf.png';
logoImg.alt = 'The Cake Factory Logo';
logoDiv.appendChild(logoImg);
header.appendChild(logoDiv);

const navItems = [
  { text: 'HOME', href: '#' },
  {
    text: 'ORDER ONLINE',
    href: '#',
    dropdown: [
      { text: 'Sri Lankan Corner', href: 'sri-lanka-corner.html' },
      { text: 'Celebration Cakes', href: 'celebration-cake.html' },
      { text: 'Cakes', href: 'cakes.html' },
      { text: 'Desserts', href: 'dessert.html' },
      { text: 'Nibbles', href: 'nibbles.html' },
      { text: 'Cupcakes', href: 'cupcakes.html' },
      { text: 'Bento Cakes', href: 'bento-cake.html' },
    ],
  },
  { text: 'ABOUT US', href: '#' },
  { text: 'CONTACT US', href: '#' },
  { text: '', href: '#', img: 'images/logos/cart.png', alt: 'Cart' },
];

navItems.forEach((item) => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.href;
  a.textContent = item.text;
  if (item.img) {
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.alt;
    a.appendChild(img);
  }
  li.appendChild(a);
  if (item.dropdown) {
    const dropdownDiv = document.createElement('div');
    dropdownDiv.className = 'dropdown-content';
    item.dropdown.forEach((dropdownItem) => {
      const dropdownA = document.createElement('a');
      dropdownA.href = dropdownItem.href;
      dropdownA.textContent = dropdownItem.text;
      dropdownDiv.appendChild(dropdownA);
    });
    li.appendChild(dropdownDiv);
  }
  ul.appendChild(li);
});

nav.appendChild(ul);
header.appendChild(nav);

orderNowDiv.className = 'order-now';
h1.textContent = 'Order Now';
orderNowDiv.appendChild(h1);
main.appendChild(orderNowDiv);

productContainer.className = 'product-container';
productContainer.id = 'productContainer';
main.appendChild(productContainer);

// Add the elements to the HTML document
html.appendChild(head);
html.appendChild(body);
body.appendChild(header);
body.appendChild(main);

// Define your product data (image URLs and descriptions)
const products = [
  { imgSrc: 'images/logos/sri-lankan-corner.png', alt: 'SRI LANKA CORNER', description: 'SRI LANKA CORNER', page: 'sri-lanka-corner.html' },
  { imgSrc: 'images/logos/celebration-cakes.png', alt: 'CELEBRATION CAKE', description: 'CELEBRATION CAKE', page: 'celebration-cake.html' },
  { imgSrc: 'images/logos/bentocake.png', alt: 'BENTO CAKE', description: 'BENTO CAKE', page: 'bento-cake.html' },
  { imgSrc: 'images/logos/cake.png', alt: 'CAKES', description: 'CAKES', page: 'cakes.html' },
  { imgSrc: 'images/logos/dessert.png', alt: 'DESSERT', description: 'DESSERT', page: 'dessert.html' },
  { imgSrc: 'images/logos/nibbles.png', alt: 'NIBBLES', description: 'NIBBLES', page: 'nibbles.html' },
  { imgSrc: 'images/logos/cupcake.png', alt: 'CUPCAKES', description: 'CUPCAKES', page: 'cupcakes.html' },
];

// Create product elements dynamically
products.forEach((product) => {
  const productDiv = document.createElement('div');
  productDiv.className = 'product';

  const img = document.createElement('img');
  img.src = product.imgSrc;
  img.alt = product.alt;

  const p = document.createElement('p');
  p.textContent = product.description;

  const button = document.createElement('button');
  button.textContent = 'Shop Now';

  // Add event listener for button click
  button.addEventListener('click', () => {
    window.location.href = product.page;
  });

  // Append elements to the product container
  productDiv.appendChild(img);
  productDiv.appendChild(p);
  productDiv.appendChild(button);
  productContainer.appendChild(productDiv);
});

// Add event listeners to dropdown items
document.querySelectorAll('.dropdown-content a').forEach((dropdownLink) => {
  dropdownLink.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = dropdownLink.href;
  });
});

// Adding the locations section
document.addEventListener('DOMContentLoaded', function() {
  const locations = [
    {
      imgSrc: 'images/logos/5th-lane.png',
      altText: 'The Cake Factory @ Colpetty',
      title: 'The Cake Factory @ Colpetty',
      addressLines: ['91A, 5th Lane', 'Colombo 03'],
      contactNumbers: ['0770107525', '0112372322'],
      openingTimes: ['9am - 6pm (Monday - Saturday)', '10am - 5pm (Sunday and Poya Days)'],
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.877256399936!2d79.85380987312062!3d6.905278318612951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25966e9977531%3A0x6200b7a56bf1e948!2sThe%20Cake%20Factory!5e0!3m2!1sen!2slk!4v1721213487778!5m2!1sen!2slk'
    },
    {
      imgSrc: 'images/logos/rajagiriya.png',
      altText: 'The Cake Factory @ Rajagiriya',
      title: 'The Cake Factory @ Rajagiriya',
      addressLines: ['25, Buthgamuwa Road', 'Rajagiriya'],
      contactNumbers: ['0777 382 510', '0112 868 414'],
      openingTimes: ['9am - 5pm (Monday - Friday)', '9am - 4:30pm (Saturday)', '9am - 12 noon (Sundays and Poya Days)'],
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8403569812867!2d79.89630807312078!3d6.909684318559013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259e7a82c9cfb%3A0x46418c1328ebd2b9!2sThe%20Cake%20Factory!5e0!3m2!1sen!2slk!4v1721213643872!5m2!1sen!2slk'
    }
  ];

  const container = document.createElement('div');
  container.className = 'container';

  locations.forEach(location => {
    const locationDiv = document.createElement('div');
    locationDiv.className = 'location';

    const img = document.createElement('img');
    img.src = location.imgSrc;
    img.alt = location.altText;
    locationDiv.appendChild(img);

    const h2 = document.createElement('h2');
    h2.textContent = location.title;
    locationDiv.appendChild(h2);

    location.addressLines.forEach(line => {
      const p = document.createElement('p');
      p.textContent = line;
      locationDiv.appendChild(p);
    });

    location.contactNumbers.forEach(number => {
      const p = document.createElement('p');
      p.textContent = number;
      locationDiv.appendChild(p);
    });

    const openingTimesDiv = document.createElement('div');
    openingTimesDiv.className = 'opening-times';

    const openingTimesTitle = document.createElement('h3');
    openingTimesTitle.textContent = 'Opening Times';
    openingTimesDiv.appendChild(openingTimesTitle);

    location.openingTimes.forEach(time => {
      const timeP = document.createElement('p');
      timeP.textContent = time;
      openingTimesDiv.appendChild(timeP);
    });

    locationDiv.appendChild(openingTimesDiv);

    const mapIframe = document.createElement('iframe');
    mapIframe.src = location.mapSrc;
    mapIframe.width = '300';
    mapIframe.height = '300';
    mapIframe.style.border = '0';
    mapIframe.allowFullscreen = '';
    mapIframe.loading = 'lazy';
    locationDiv.appendChild(mapIframe);

    container.appendChild(locationDiv);
  });

  body.appendChild(container);
});

// Add the footer section
const footerContent = document.createElement('div');
footerContent.className = 'footer-content';

const socialMedia = document.createElement('div');
socialMedia.className = 'social-media';
const followUs = document.createElement('span');
followUs.textContent = 'Follow us:';
socialMedia.appendChild(followUs);

const facebookLink = document.createElement('a');
facebookLink.href = 'https://www.facebook.com';
facebookLink.target = '_blank';
facebookLink.innerHTML = '<i class="fab fa-facebook-f"></i>';
socialMedia.appendChild(facebookLink);

const instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com';
instagramLink.target = '_blank';
instagramLink.innerHTML = '<i class="fab fa-instagram"></i>';
socialMedia.appendChild(instagramLink);

footerContent.appendChild(socialMedia);

const footerCopy = document.createElement('div');
footerCopy.className = 'footer-copy';
const footerText = document.createElement('p');
footerText.innerHTML = 'Copyright @ <a href="https://www.cakefactory.lk">www.cakefactory.lk</a>';
footerCopy.appendChild(footerText);

footerContent.appendChild(footerCopy);
footer.appendChild(footerContent);

body.appendChild(footer); // Append the footer to the body at the end
