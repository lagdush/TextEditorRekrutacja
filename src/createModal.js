const closeModal = () => {
  const modal = document.querySelector('.modal');
  document.body.removeChild(modal);
};

export const modal = (text = 'alert') => {
  const modalWindow = document.createElement('div');
  modalWindow.className = 'modal';
  const content = document.createElement('h3');
  content.innerText = text;
  const button = document.createElement('button');
  button.className = 'modal-button ';
  button.innerText = 'OK';
  modalWindow.appendChild(content);
  modalWindow.appendChild(button);
  document.body.prepend(modalWindow);
  document.querySelector('.modal-button').addEventListener('click', closeModal);
};

