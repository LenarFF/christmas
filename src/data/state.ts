export interface IState {
  language: 'ru' | 'en';
  photoSource: 'github' | 'unsplash' | 'flickr';
  time: boolean;
  date: boolean;
  greeting: boolean;
  weather: boolean;
  audio: boolean;
  quote: boolean;
  linksBlock: boolean;
  timeOfDay: 'morning' | 'day' | 'evening' | 'night';
  bcgrdTag: string;
  userName: string;
  city: string;
  links: { name: string; href: string }[];
}

export const data: { state: IState } = {
  state: {
    language: 'en',
    photoSource: 'github',
    time: true,
    date: true,
    greeting: true,
    weather: true,
    audio: true,
    quote: true,
    linksBlock: true,
    timeOfDay: 'morning',
    bcgrdTag: 'cat',
    userName: '',
    city: 'Minsk',
    links: [
      { name: 'RSSchool', href: 'https://rs.school/' },
      { name: 'GitHub', href: 'https://github.com/LenarFF?tab=repositories' },
    ],
  },
};
