import { overrideThemes } from 'markedit-theming';
import { nord } from '@uiw/codemirror-theme-nord';

overrideThemes({
  dark: {
    extension: nord,
    colors: {
      accentColor: '#5e81ac',
      syntaxMarker: '#8fbcbb',
    },
  },
});
