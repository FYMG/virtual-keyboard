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
  capsLockActive: 'keyboard__key_caps_active',
  shift: 'keyboard__key_shift',
  shiftActive: 'keyboard__key_shift_active',
  alt: 'keyboard__key_alt',
  altActive: 'keyboard__key_alt_active',
  ctrl: 'keyboard__key_ctrl',
  ctrlActive: 'keyboard__key_ctrl_active',
  medium: 'keyboard__key_medium',
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
    this.alt = false;
    this.ctrl = false;
    this.shiftDown = false;
    this.pressedButtons = [];
    this.lang = this.initLang();
    this.lastItteractedKey = null;
    this.KEYS_EVENTS = {
      ShiftRight: [this.toggleShift],
      ShiftLeft: [this.toggleShift],
      CapsLock: [this.toggleCapsLock],
      AltLeft: [this.toggleAlt, this.changeLang],
      AltRight: [this.toggleAlt],
      ControlLeft: [this.toggleCtrl, this.changeLang],
      ControlRight: [this.toggleCtrl],
      default: [() => {}],
    };
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
    const keyEvent = (event) => {
      console.log(event);
      let clickedKey = event.target.getAttribute('data-key');
      if (!this.lastItteractedKey) {
        this.lastItteractedKey = clickedKey;
      }
      clickedKey = this.lastItteractedKey === clickedKey && event.type === 'mouseup' ? clickedKey : this.lastItteractedKey;
      if (Object.keys(this.KEYS_EVENTS).includes(clickedKey)) {
        this.KEYS_EVENTS[clickedKey].forEach((callback) => {
          callback.bind(this)(clickedKey);
        });
      } else {
        this.KEYS_EVENTS.default.forEach((callback) => {
          callback.bind(this)(clickedKey);
        });
      }
      this.lastItteractedKey = event.type === 'mousedown' ? clickedKey : null;
    };
    button.className = KEYS_STYLE.key;
    button.setAttribute('data-key', key);
    button.addEventListener('mousedown', keyEvent);
    button.addEventListener('mouseup', keyEvent);
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
          if (this.capsLock) {
            updatedButton.classList.add(KEYS_STYLE.capsLockActive);
          } else {
            updatedButton.classList.remove(KEYS_STYLE.capsLockActive);
          }
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
          if (this.shiftDown) {
            updatedButton.classList.add(KEYS_STYLE.shiftActive);
          } else {
            updatedButton.classList.remove(KEYS_STYLE.shiftActive);
          }
          updatedButton.classList.add(KEYS_STYLE.shift, KEYS_STYLE.medium);
          updatedButton.textContent = KEYS_TEXT.shift;
          break;
        }
        case ('ShiftRight'): {
          if (this.shiftDown) {
            updatedButton.classList.add(KEYS_STYLE.shiftActive);
          } else {
            updatedButton.classList.remove(KEYS_STYLE.shiftActive);
          }
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
          if (this.alt) {
            updatedButton.classList.add(KEYS_STYLE.altActive);
          } else {
            updatedButton.classList.remove(KEYS_STYLE.altActive);
          }
          updatedButton.classList.add(KEYS_STYLE.alt);
          updatedButton.textContent = KEYS_TEXT.alt;
          break;
        }
        case ('AltLeft'): {
          if (this.alt) {
            updatedButton.classList.add(KEYS_STYLE.altActive);
          } else {
            updatedButton.classList.remove(KEYS_STYLE.altActive);
          }
          updatedButton.classList.add(KEYS_STYLE.alt);
          updatedButton.textContent = KEYS_TEXT.alt;
          break;
        }
        case ('ControlRight'): {
          if (this.ctrl) {
            updatedButton.classList.add(KEYS_STYLE.ctrlActive);
          } else {
            updatedButton.classList.remove(KEYS_STYLE.ctrlActive);
          }
          updatedButton.classList.add(KEYS_STYLE.ctrl);
          updatedButton.textContent = KEYS_TEXT.ctrl;
          break;
        }
        case ('ControlLeft'): {
          if (this.ctrl) {
            updatedButton.classList.add(KEYS_STYLE.ctrlActive);
          } else {
            updatedButton.classList.remove(KEYS_STYLE.ctrlActive);
          }
          updatedButton.classList.add(KEYS_STYLE.ctrl);
          updatedButton.textContent = KEYS_TEXT.ctrl;
          break;
        }
        default: {
          updatedButton.textContent = this.getKeyText(key);
          break;
        }
      }
      return updatedButton;
    });
    console.log(`lang: ${this.lang}, caps: ${this.capsLock}, shift: ${this.shiftDown}`);
  }

  toggleCapsLock(clickedKey) {
    this.togglePressedKey(clickedKey);
    if (this.pressedButtons.includes('CapsLock')) {
      this.capsLock = !this.capsLock;
    }
    this.updateKeyboardButtons();
  }

  toggleShift(clickedKey) {
    this.togglePressedKey(clickedKey);
    this.shiftDown = this.pressedButtons.includes('ShiftRight') || this.pressedButtons.includes('ShiftLeft');
    this.updateKeyboardButtons();
  }

  toggleAlt(clickedKey) {
    this.togglePressedKey(clickedKey);
    this.alt = this.pressedButtons.includes('AltRight') || this.pressedButtons.includes('AltLeft');
    this.updateKeyboardButtons();
  }

  toggleCtrl(clickedKey) {
    this.togglePressedKey(clickedKey);
    this.ctrl = this.pressedButtons.includes('ControlRight') || this.pressedButtons.includes('ControlLeft');
    this.updateKeyboardButtons();
  }

  changeLang() {
    if (this.pressedButtons.includes('AltLeft')
      && this.pressedButtons.includes('ControlLeft')
      && this.pressedButtons.length === 2) {
      if (this.lang === 'eng') {
        this.lang = 'rus';
      } else {
        this.lang = 'eng';
      }
      localStorage.setItem('virtualKeyboard:lang', this.lang);
      this.updateKeyboardButtons();
    }
  }

  getKeyText(keyCode) {
    let keyText = '';
    if (this.shiftDown) {
      keyText = KEYS[this.lang][keyCode].shiftDown;
      if (this.capsLock && keyText.toUpperCase() !== keyText.toLowerCase()) {
        keyText = KEYS[this.lang][keyCode].shiftUp;
      }
    } else if (this.capsLock) {
      keyText = KEYS[this.lang][keyCode].capsLock;
    } else {
      keyText = KEYS[this.lang][keyCode].shiftUp;
    }
    return keyText;
  }

  initLang() {
    if (localStorage.getItem('virtualKeyboard:lang') !== null) {
      return localStorage.getItem('virtualKeyboard:lang');
    }
    localStorage.setItem('virtualKeyboard:lang', 'eng');
    this.lang = 'eng';
    return 'eng';
  }

  togglePressedKey(key) {
    if (this.pressedButtons.includes(key)) {
      this.pressedButtons.splice(this.pressedButtons.indexOf(key), 1);
    } else {
      this.pressedButtons.push(key);
    }
  }
}
