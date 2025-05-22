// store/storage.ts
const STORAGE_KEY = 'reduxState';

export const loadState = (): any => {
  try {
    const serialized = localStorage.getItem(STORAGE_KEY);
    return serialized ? JSON.parse(serialized) : undefined;
  } catch (err) {
    console.error('Load state error:', err);
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(STORAGE_KEY, serialized);
  } catch (err) {
    console.error('Save state error:', err);
  }
};


