import { overrideThemes } from 'markedit-theming';
import { nord } from 'cm6-theme-nord';

overrideThemes({
  dark: {
    extension: nord,
    colors: {
      editor: {
        activeLineBackground: '#4c566a66',
      },
    },
  },
});
