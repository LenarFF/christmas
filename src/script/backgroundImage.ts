import { data } from '../data/state';

const body = document.querySelector('body') as HTMLElement;
const unsplashKey = '1NTiICI9KUWvcENUNmClVX-4jcOBo3B_8Y-FcYT1WXM';
const flickrKey = '0c89e994d479ba4f7a9ed187abe4e5af';
const slideNext = document.querySelector('.slide-next') as HTMLElement;
const slidePrev = document.querySelector('.slide-prev') as HTMLElement;

export const getLinkToImage = async () => {
  const img = new Image();
  const url =
    data.state.photoSource === 'unsplash'
      ? `https://api.unsplash.com/photos/random?orientation=landscape&query=${data.state.timeOfDay}+${data.state.bcgrdTag}&client_id=${unsplashKey}`
      : `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${flickrKey}&tags=${data.state.timeOfDay}+${data.state.bcgrdTag}&extras=url_l&format=json&nojsoncallback=1&per_page=50`;
  const res = await fetch(url);
  const imgData = await res.json();
  img.src =
    data.state.photoSource === 'unsplash'
      ? imgData.urls.regular
      : imgData.photos.photo[Math.round(Math.random() * 10)].url_l;
  img.onload = () => {
    body.style.backgroundImage = `url('${img.src}')`;
  };
};

export const changeSlideApi = () => {
  slideNext.addEventListener('click', getLinkToImage);
  slidePrev.addEventListener('click', getLinkToImage);
};
