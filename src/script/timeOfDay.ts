export const getTimeOfDay: () => 'night' | 'morning' | 'day' | 'evening' = () => {
  const date = new Date();
  const hours = date.getHours();
  switch (true) {
    case hours < 6:
      return 'night';
    case hours < 12:
      return 'morning';
    case hours < 18:
      return 'day';
    default:
      return 'evening';
  }
};
