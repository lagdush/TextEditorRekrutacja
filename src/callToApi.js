import { modal } from './createModal';

export const saveFile = async () => {
  try {
    const data = document.getElementById('text').innerHTML;
    const json = JSON.stringify({ html: data });
    const response = await fetch('http://localhost:3000/api/save', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: json,
    });
    const messageFromApi = await response.json();
    modal(messageFromApi.message);
  } catch (error) {
    modal('Oops something went wrong');
  }
};

export const loadFile = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/load');
    const data = await response.json();
    const fromJsonToJS = JSON.parse(data.data);
    document.getElementById('text').innerHTML = fromJsonToJS.html;
  } catch (error) {
    modal('Oops something went wrong');
  }
};
