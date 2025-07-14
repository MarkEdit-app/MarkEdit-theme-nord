import { overrideThemes } from 'markedit-theming';
import { nord } from '@uiw/codemirror-theme-nord';

overrideThemes({
  dark: {
    extension: nord,
  },
});
