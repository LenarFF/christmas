export interface IState {
  language: 'ru' | 'en';
  photoSource: 'github' | 'unsplash' | 'flickr';
  time: boolean;
  date: boolean;
  greeting: boolean;
  weather: boolean;
  audio: boolean;
  quote: boolean;
  todolist: boolean;
  timeOfDay: 'morning' | 'day' | 'evening' | 'night';
  bcgrdTag: string;
  userName: string;
  city: string;
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
    todolist: true,
    timeOfDay: 'morning',
    bcgrdTag: 'cat',
    userName: '',
    city: 'Minsk',
  },
};
