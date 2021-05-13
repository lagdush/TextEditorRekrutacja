const styleSelectedText = (text, tag) => {
  const selected = window.getSelection();
  const range = selected.getRangeAt(0);
  const textARR = [...text];
  textARR.splice(range.startOffset, 0, `<${tag}>`);
  textARR.splice(range.endOffset + 1, 0, `</${tag}>`);
  if (range.startOffset === range.endOffset) {
    document.getElementById('text').innerHTML = `<${tag}>${text}</${tag}>`;
  } else {
    document.getElementById('text').innerHTML = textARR.join('');
  }
};

export const bold = () => {
  let text = document.getElementById('text').innerText;
  styleSelectedText(text, 'strong');
};

export const italic = () => {
  let text = document.getElementById('text').innerText;
  styleSelectedText(text, 'i');
};

export const addBullet = () => {
  let text = document.getElementById('text').innerText;
  document.getElementById('text').innerHTML = `<ul><li>${text}</li></ul>`;
};
