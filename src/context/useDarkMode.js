import { useContext } from 'react';

import { DarkModeContext } from './DarkModeContext';

export const useDarkMode = function () {
  const context = useContext(DarkModeContext);

  if (!context)
    throw new Error('useDarkMode must be used within the DarkModeProvider');

  return context;
};
