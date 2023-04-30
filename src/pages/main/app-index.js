/* eslint-disable no-console */
import './components/sass/style.sass';
import Keyboard from './components/keyboard';

const CSS_STYLES = {
  main: 'main',
  textArea: 'main__text',
  virtualInput: 'virtual-input',
};

const createMain = () => {
  const main = document.createElement('main');
  main.className = CSS_STYLES.main;
  const textArea = document.createElement('textarea');
  textArea.classList.add(CSS_STYLES.textArea, CSS_STYLES.virtualInput);
  main.append(textArea);
  return main;
};

document.body.append(createMain());
const keyboard = new Keyboard();
document.body.append(keyboard.createComponent());

const textarea = document.querySelector('.virtual-input');
textarea.addEventListener('keydown', (e) => { console.log(e); });

// const KeyList = {};
// // function logKey(e) {
// //   if (KeyList[e.code]) {
// //     if (e.shiftKey) {
// //       KeyList[e.code].shiftUp = e.key;
// //     } else {
// //       KeyList[e.code].shiftDown = e.key;
// //     }
// //   } else if (e.shiftKey) {
// //     KeyList[e.code] = { shiftUp: e.key, shiftDown: '', capsLock: '' };
// //   } else {
// //     KeyList[e.code] = { shiftUp: '', shiftDown: e.key, capsLock: '' };
// //   }
// //   // localStorage.setItem('keys', JSON.stringify(KeyList));
// //   const withCaps = JSON.parse(localStorage.getItem('keys'));
// //   Object.keys(withCaps).forEach((key) => {
// //     if (withCaps[key].shiftDown.toLowerCase() !== withCaps[key].shiftDown.toUpperCase()) {
// //       withCaps[key].capsLock = withCaps[key].shiftUp;
// //     } else {
// //       withCaps[key].capsLock = withCaps[key].shiftDown;
// //     }
// //     const temp = withCaps[key].shiftUp;
// //     withCaps[key].shiftUp = withCaps[key].shiftDown;
// //     withCaps[key].shiftDown = temp;
// //   });
// //   console.log(withCaps);
// //   // localStorage.setItem('keys_ru', JSON.stringify(withCaps));
// //
// //   console.log(e, KeyList);
// // }
// //
// // const textarea = document.getElementById('textarea');
// // textarea.addEventListener('keydown', logKey);
