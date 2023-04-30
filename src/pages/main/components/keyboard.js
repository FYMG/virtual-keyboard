// const RU_CHAR_SET = [];
/* eslint-disable no-console */

import { KEYS, KEYS_LAYOUT } from './keys';

const KEYS_STYLE = {
  space: 'keyboard__key_space',
  capsLock: 'keyboard__key_caps',
  medium: 'keyboard__key_medium',
  shift: 'keyboard__key_shift',
  meta: 'keyboard__key_win',
  tab: 'keyboard__key_tab',
};
const KEYS_TEXT = {
  capsLock: 'CapsLk',
  shift: 'Shift',
  meta: 'Win',
  enter: 'Enter',
  backspace: 'Backspace',
  space: '',
  arrowLeft: '←',
  arrowRight: '→',
  arrowUp: '↑',
  arrowDown: '↓',
  tab: 'Tab',
  alt: 'Alt',
  ctrl: 'Ctrl',
};

export default class Keyboard {
  constructor() {
    this.buttonsLinks = [];
    if (localStorage.getItem('virtualKeyboard:lang') !== null) {
      this.lang = localStorage.getItem('virtualKeyboard:lang');
    } else {
      this.lang = 'eng';
      localStorage.setItem('virtualKeyboard:lang', 'eng');
    }
    console.log(this.lang);
  }

  createComponent() {
    const keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    const keyboardKeys = document.createElement('div');
    keyboardKeys.className = 'keyboard__keys';
    KEYS_LAYOUT.forEach((key) => {
      const button = this.createKeyboardButton(key);
      keyboardKeys.append(button);
      this.buttonsLinks.push(button);
    });

    keyboard.append(keyboardKeys);
    return keyboard;
  }

  createKeyboardButton(key) {
    const button = document.createElement('button');
    button.className = 'keyboard__key';
    button.setAttribute('key', key);
    switch (key) {
      case 'Space': {
        button.classList.add(KEYS_STYLE.space);
        button.textContent = KEYS_TEXT.space;
        break;
      }
      case 'CapsLock': {
        button.classList.add(KEYS_STYLE.capsLock);
        button.classList.add(KEYS_STYLE.medium);
        button.textContent = KEYS_TEXT.capsLock;
        break;
      }
      case 'MetaLeft': {
        button.classList.add(KEYS_STYLE.meta);
        button.textContent = KEYS_TEXT.meta;
        break;
      }
      case ('ShiftLeft'): {
        button.classList.add(KEYS_STYLE.shift);
        button.classList.add(KEYS_STYLE.medium);
        button.textContent = KEYS_TEXT.shift;
        break;
      }
      case ('ShiftRight'): {
        button.classList.add(KEYS_STYLE.shift);
        button.classList.add(KEYS_STYLE.medium);
        button.textContent = KEYS_TEXT.shift;
        break;
      }
      case ('Enter'): {
        button.classList.add(KEYS_STYLE.medium);
        button.textContent = KEYS_TEXT.enter;
        break;
      }
      case ('Backspace'): {
        button.classList.add(KEYS_STYLE.medium);
        button.textContent = KEYS_TEXT.backspace;
        break;
      }
      case ('ArrowLeft'): {
        button.textContent = KEYS_TEXT.arrowLeft;
        break;
      }
      case ('ArrowRight'): {
        button.textContent = KEYS_TEXT.arrowRight;
        break;
      }
      case ('ArrowUp'): {
        button.textContent = KEYS_TEXT.arrowUp;
        break;
      }
      case ('ArrowDown'): {
        button.textContent = KEYS_TEXT.arrowDown;
        break;
      }
      case ('Tab'): {
        button.classList.add(KEYS_STYLE.medium);
        button.classList.add(KEYS_STYLE.tab);
        button.textContent = KEYS_TEXT.tab;
        break;
      }
      case ('AltRight'): {
        button.textContent = KEYS_TEXT.alt;
        break;
      }
      case ('AltLeft'): {
        button.textContent = KEYS_TEXT.alt;
        break;
      }
      case ('ControlRight'): {
        button.textContent = KEYS_TEXT.ctrl;
        break;
      }
      case ('ControlLeft'): {
        button.textContent = KEYS_TEXT.ctrl;
        break;
      }
      default: {
        button.textContent = KEYS[this.lang][key].shiftUp;
        break;
      }
    }
    return button;
  }
}
