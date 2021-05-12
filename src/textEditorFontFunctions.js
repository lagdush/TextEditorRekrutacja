export const bold = () => {
  let text = document.getElementById('text').innerText;
  document.getElementById('text').innerHTML = `<strong>${text}</strong>`;
};

export const italic = () => {
  let text = document.getElementById('text').innerText;
  document.getElementById('text').innerHTML = `<i>${text}</i>`;
};

export const addBullet = () => {
  let text = document.getElementById('text').innerText;
  document.getElementById('text').innerHTML = `<ul><li>${text}</li></ul>`;
};
