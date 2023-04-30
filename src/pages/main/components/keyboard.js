// const RU_CHAR_SET = [];
/* eslint-disable no-console */

import { KEYS, KEYS_LAYOUT } from './keys';

const KEYBOARD_STYLE = {
  keyboard: 'keyboard',
  keyboardKeys: 'keyboard__keys',
};
const KEYS_STYLE = {
  key: 'keyboard__key',
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
    this.textAreaLink = document.querySelector('.virtual-input');
    this.buttonLinks = [];
    this.capsLock = false;
    this.shiftDown = false;
    this.pressedButtons = [];
    this.lang = this.initLang();
  }

  createComponent() {
    const keyboard = document.createElement('div');
    keyboard.className = KEYBOARD_STYLE.keyboard;
    const keyboardKeys = document.createElement('div');
    keyboardKeys.className = KEYBOARD_STYLE.keyboardKeys;
    KEYS_LAYOUT.forEach((key) => {
      const button = this.createKeyboardButton(key);
      keyboardKeys.append(button);
      this.buttonLinks.push(button);
    });
    this.updateKeyboardButtons();
    keyboard.append(keyboardKeys);
    return keyboard;
  }

  createKeyboardButton(key) {
    const button = document.createElement('button');
    button.className = KEYS_STYLE.key;
    button.setAttribute('data-key', key);
    button.addEventListener('mousedown', () => {
      const event = new KeyboardEvent('keydown', { code: key, key: KEYS[this.lang][key].shiftUp });
      this.textAreaLink.dispatchEvent(
        event,
      );
      console.log(event);
      console.log('!!!!');
    });
    return button;
  }

  updateKeyboardButtons() {
    this.buttonLinks.map((button) => {
      const key = button.getAttribute('data-key');
      const updatedButton = button;
      switch (key) {
        case 'Space': {
          updatedButton.classList.add(KEYS_STYLE.space);
          updatedButton.textContent = KEYS_TEXT.space;
          break;
        }
        case 'CapsLock': {
          updatedButton.classList.add(KEYS_STYLE.capsLock, KEYS_STYLE.medium);
          updatedButton.textContent = KEYS_TEXT.capsLock;
          break;
        }
        case 'MetaLeft': {
          updatedButton.classList.add(KEYS_STYLE.meta);
          updatedButton.innerText = KEYS_TEXT.meta;
          break;
        }
        case ('ShiftLeft'): {
          updatedButton.classList.add(KEYS_STYLE.shift, KEYS_STYLE.medium);
          updatedButton.textContent = KEYS_TEXT.shift;
          break;
        }
        case ('ShiftRight'): {
          updatedButton.classList.add(KEYS_STYLE.shift, KEYS_STYLE.medium);
          updatedButton.textContent = KEYS_TEXT.shift;
          break;
        }
        case ('Enter'): {
          updatedButton.classList.add(KEYS_STYLE.medium);
          updatedButton.textContent = KEYS_TEXT.enter;
          break;
        }
        case ('Backspace'): {
          button.classList.add(KEYS_STYLE.medium);
          updatedButton.textContent = KEYS_TEXT.backspace;
          break;
        }
        case ('ArrowLeft'): {
          updatedButton.textContent = KEYS_TEXT.arrowLeft;
          break;
        }
        case ('ArrowRight'): {
          updatedButton.textContent = KEYS_TEXT.arrowRight;
          break;
        }
        case ('ArrowUp'): {
          updatedButton.textContent = KEYS_TEXT.arrowUp;
          break;
        }
        case ('ArrowDown'): {
          updatedButton.textContent = KEYS_TEXT.arrowDown;
          break;
        }
        case ('Tab'): {
          updatedButton.classList.add(KEYS_STYLE.medium);
          updatedButton.classList.add(KEYS_STYLE.tab);
          updatedButton.textContent = KEYS_TEXT.tab;
          break;
        }
        case ('AltRight'): {
          updatedButton.textContent = KEYS_TEXT.alt;
          break;
        }
        case ('AltLeft'): {
          updatedButton.textContent = KEYS_TEXT.alt;
          break;
        }
        case ('ControlRight'): {
          updatedButton.textContent = KEYS_TEXT.ctrl;
          break;
        }
        case ('ControlLeft'): {
          updatedButton.textContent = KEYS_TEXT.ctrl;
          break;
        }
        default: {
          let keySet = '';
          if (this.shiftDown) { keySet = 'shiftDown'; } else if (this.capsLock) { keySet = 'capsLock'; } else { keySet = 'shiftUp'; }
          updatedButton.textContent = KEYS[this.lang][key][keySet];
          break;
        }
      }
      return updatedButton;
    });
    console.log(`lang: ${this.lang}, caps: ${this.capsLock}, shift: ${this.shiftDown}`);
  }

  pressCapsLock() {
    this.capsLock = !this.capsLock;
    this.updateKeyboardButtons();
  }

  pressShift() {
    this.shiftDown = !this.shiftDown;
    this.updateKeyboardButtons();
  }

  changeLang() {
    if (this.lang === 'eng') {
      this.lang = 'rus';
    } else {
      this.lang = 'eng';
    }
    localStorage.setItem('virtualKeyboard:lang', this.lang);
    this.updateKeyboardButtons();
  }

  initLang() {
    if (localStorage.getItem('virtualKeyboard:lang') !== null) {
      return localStorage.getItem('virtualKeyboard:lang');
    }
    localStorage.setItem('virtualKeyboard:lang', 'eng');
    this.lang = 'eng';
    return 'eng';
  }
}
