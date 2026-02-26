export const getData = (key) => {
  if (!key) return false;
  return JSON.parse(localStorage.getItem(key));
};

export const setData = (key, data) => {
  if (!key || !data) return false;
  localStorage.setItem(key, JSON.stringify(data));
  return true;
};




