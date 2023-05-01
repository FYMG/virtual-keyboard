import { KEYS, KEYS_LAYOUT } from './keys';

const KEYBOARD_STYLE = {
  keyboard: 'keyboard',
  keyboardKeys: 'keyboard__keys',
};
const KEYS_STYLE = {
  key: 'keyboard__key',
  keyActive: 'keyboard__key_active',
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
      Enter: [this.insertEnter],
      Tab: [this.insertTab],
      KeyA: [this.insertButtonText],
      Backspace: [this.pressBackspace],
      Delete: [this.pressDel],
      ArrowUp: [this.insertArrowLikeText],
      ArrowDown: [this.insertArrowLikeText],
      ArrowLeft: [this.insertArrowLikeText],
      ArrowRight: [this.insertArrowLikeText],
      MetaLeft: [this.pressMeta],
      default: [this.insertButtonText],
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
    this.addKeyboardEventListener();
    return keyboard;
  }

  createKeyboardButton(key) {
    const button = document.createElement('button');
    button.className = KEYS_STYLE.key;
    button.setAttribute('data-key', key);
    this.addMouseEventListenerToButton(button);
    return button;
  }

  addMouseEventListenerToButton(button) {
    const mouseListener = (event) => {
      let clickedKey = event.target.getAttribute('data-key');
      if (!this.lastItteractedKey) {
        this.lastItteractedKey = clickedKey;
      }
      clickedKey = this.lastItteractedKey === clickedKey && event.type === 'mouseup' ? clickedKey : this.lastItteractedKey;
      if (event.type === 'mousedown' && this.pressedButtons.includes(clickedKey)) {
        button.dispatchEvent(new MouseEvent('mouseup'));
        this.lastItteractedKey = null;
      }
      this.activateKeyEvents(clickedKey);
      this.lastItteractedKey = event.type === 'mousedown' ? clickedKey : null;
    };
    button.addEventListener('mousedown', mouseListener);
    button.addEventListener('mouseup', mouseListener);
  }

  activateKeyEvents(key) {
    if (Object.keys(this.KEYS_EVENTS).includes(key)) {
      this.KEYS_EVENTS[key].forEach((callback) => {
        callback.bind(this)(key);
      });
    } else {
      this.KEYS_EVENTS.default.forEach((callback) => {
        callback.bind(this)(key);
      });
    }
  }

  addKeyboardEventListener() {
    const KeyboardListener = (event) => {
      event.preventDefault();
      const clickedKey = event.code;
      if (event.type === 'keydown' && this.pressedButtons.includes(clickedKey)) {
        document.body.dispatchEvent(new KeyboardEvent('keyup', { code: clickedKey }));
      }
      this.activateKeyEvents(clickedKey);
    };
    document.body.addEventListener('keydown', KeyboardListener);
    document.body.addEventListener('keyup', KeyboardListener);
  }

  updateKeyboardButtons() {
    this.buttonLinks.map((button) => {
      const key = button.getAttribute('data-key');
      const updateButton = button;
      switch (key) {
        case 'Space': {
          updateButton.classList.add(KEYS_STYLE.space);
          updateButton.textContent = KEYS_TEXT.space;
          break;
        }
        case 'CapsLock': {
          if (this.capsLock) {
            updateButton.classList.add(KEYS_STYLE.capsLockActive);
          } else {
            updateButton.classList.remove(KEYS_STYLE.capsLockActive);
          }
          updateButton.classList.add(KEYS_STYLE.capsLock, KEYS_STYLE.medium);
          updateButton.textContent = KEYS_TEXT.capsLock;
          break;
        }
        case 'MetaLeft': {
          updateButton.classList.add(KEYS_STYLE.meta);
          updateButton.innerText = KEYS_TEXT.meta;
          break;
        }
        case ('ShiftLeft'): {
          if (this.pressedButtons.includes('ShiftLeft')) {
            updateButton.classList.add(KEYS_STYLE.shiftActive);
          } else {
            updateButton.classList.remove(KEYS_STYLE.shiftActive);
          }
          updateButton.classList.add(KEYS_STYLE.shift, KEYS_STYLE.medium);
          updateButton.textContent = KEYS_TEXT.shift;
          break;
        }
        case ('ShiftRight'): {
          if (this.pressedButtons.includes('ShiftRight')) {
            updateButton.classList.add(KEYS_STYLE.shiftActive);
          } else {
            updateButton.classList.remove(KEYS_STYLE.shiftActive);
          }
          updateButton.classList.add(KEYS_STYLE.shift, KEYS_STYLE.medium);
          updateButton.textContent = KEYS_TEXT.shift;
          break;
        }
        case ('Enter'): {
          updateButton.classList.add(KEYS_STYLE.medium);
          updateButton.textContent = KEYS_TEXT.enter;
          break;
        }
        case ('Backspace'): {
          button.classList.add(KEYS_STYLE.medium);
          updateButton.textContent = KEYS_TEXT.backspace;
          break;
        }
        case ('ArrowLeft'): {
          updateButton.textContent = KEYS_TEXT.arrowLeft;
          break;
        }
        case ('ArrowRight'): {
          updateButton.textContent = KEYS_TEXT.arrowRight;
          break;
        }
        case ('ArrowUp'): {
          updateButton.textContent = KEYS_TEXT.arrowUp;
          break;
        }
        case ('ArrowDown'): {
          updateButton.textContent = KEYS_TEXT.arrowDown;
          break;
        }
        case ('Tab'): {
          updateButton.classList.add(KEYS_STYLE.medium);
          updateButton.classList.add(KEYS_STYLE.tab);
          updateButton.textContent = KEYS_TEXT.tab;
          break;
        }
        case ('AltRight'): {
          if (this.pressedButtons.includes('AltRight')) {
            updateButton.classList.add(KEYS_STYLE.altActive);
          } else {
            updateButton.classList.remove(KEYS_STYLE.altActive);
          }
          updateButton.classList.add(KEYS_STYLE.alt);
          updateButton.textContent = KEYS_TEXT.alt;
          break;
        }
        case ('AltLeft'): {
          if (this.pressedButtons.includes('AltLeft')) {
            updateButton.classList.add(KEYS_STYLE.altActive);
          } else {
            updateButton.classList.remove(KEYS_STYLE.altActive);
          }
          updateButton.classList.add(KEYS_STYLE.alt);
          updateButton.textContent = KEYS_TEXT.alt;
          break;
        }
        case ('ControlRight'): {
          if (this.pressedButtons.includes('ControlRight')) {
            updateButton.classList.add(KEYS_STYLE.ctrlActive);
          } else {
            updateButton.classList.remove(KEYS_STYLE.ctrlActive);
          }
          updateButton.classList.add(KEYS_STYLE.ctrl);
          updateButton.textContent = KEYS_TEXT.ctrl;
          break;
        }
        case ('ControlLeft'): {
          if (this.pressedButtons.includes('ControlLeft')) {
            updateButton.classList.add(KEYS_STYLE.ctrlActive);
          } else {
            updateButton.classList.remove(KEYS_STYLE.ctrlActive);
          }
          updateButton.classList.add(KEYS_STYLE.ctrl);
          updateButton.textContent = KEYS_TEXT.ctrl;
          break;
        }
        default: {
          updateButton.textContent = this.getKeyText(key);
          break;
        }
      }
      if (this.pressedButtons.includes(key)) {
        button.classList.add(KEYS_STYLE.keyActive);
      } else {
        button.classList.remove(KEYS_STYLE.keyActive);
      }
      return updateButton;
    });
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

  insertButtonText(clickedKey) {
    this.togglePressedKey(clickedKey);
    if (this.pressedButtons.includes(clickedKey)) {
      this.insertTextAtTextAreaCursor(this.getKeyText(clickedKey));
    }
    this.updateKeyboardButtons();
  }

  insertEnter(clickedKey) {
    this.togglePressedKey(clickedKey);
    if (this.pressedButtons.includes(clickedKey)) {
      this.insertTextAtTextAreaCursor('\r\n');
    }
    this.updateKeyboardButtons();
  }

  insertTab(clickedKey) {
    this.togglePressedKey(clickedKey);
    if (this.pressedButtons.includes(clickedKey)) {
      this.insertTextAtTextAreaCursor('\t');
    }
    this.updateKeyboardButtons();
  }

  pressBackspace(clickedKey) {
    this.togglePressedKey(clickedKey);
    if (this.pressedButtons.includes(clickedKey)) {
      this.deleteTextAtTextAreaCursor(true);
    }
    this.updateKeyboardButtons();
  }

  pressDel(clickedKey) {
    this.togglePressedKey(clickedKey);
    if (this.pressedButtons.includes(clickedKey)) {
      this.deleteTextAtTextAreaCursor(false, true);
    }
    this.updateKeyboardButtons();
  }

  insertArrowLikeText(clickedKey) {
    const text = {
      ArrowUp: KEYS_TEXT.arrowUp,
      ArrowLeft: KEYS_TEXT.arrowLeft,
      ArrowDown: KEYS_TEXT.arrowDown,
      ArrowRight: KEYS_TEXT.arrowRight,
    };
    this.togglePressedKey(clickedKey);
    if (this.pressedButtons.includes(clickedKey)) {
      this.insertTextAtTextAreaCursor(text[clickedKey]);
    }
    this.updateKeyboardButtons();
  }

  pressArrow(clickedKey) {
    this.togglePressedKey(clickedKey);
    if (this.pressedButtons.includes(clickedKey)) {
      this.navigateTextAreaCursor(
        clickedKey === 'ArrowUp',
        clickedKey === 'ArrowLeft',
        clickedKey === 'ArrowDown',
        clickedKey === 'ArrowRight',
      );
    }
    this.updateKeyboardButtons();
  }

  pressMeta(clickedKey) {
    this.togglePressedKey(clickedKey);
    this.updateKeyboardButtons();
  }

  selectAll() {
    this.preventNext = true;
    if (this.pressedButtons.includes('ControlLeft')
      && this.pressedButtons.includes('KeyA')
      && this.pressedButtons.length === 2) {
      this.textAreaLink.selectionStart = 0;
      this.textAreaLink.selectionEnd = this.textAreaLink.value.length;
    }
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
    let keyText;
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

  insertTextAtTextAreaCursor(text) {
    this.textAreaLink.focus();
    const startPos = this.textAreaLink.selectionStart;
    const endPos = this.textAreaLink.selectionEnd;
    this.textAreaLink.value = this.textAreaLink.value.substring(0, startPos)
      + text
      + this.textAreaLink.value.substring(endPos, this.textAreaLink.value.length);
    const selectorPos = startPos + text.length;
    this.textAreaLink.selectionStart = selectorPos;
    this.textAreaLink.selectionEnd = selectorPos;
  }

  deleteTextAtTextAreaCursor(prev = false, next = false) {
    this.textAreaLink.focus();
    const startPos = this.textAreaLink.selectionStart;
    const endPos = this.textAreaLink.selectionEnd;
    if (startPos !== endPos) {
      this.textAreaLink.value = this.textAreaLink.value.substring(0, startPos)
        + this.textAreaLink.value.substring(endPos, this.textAreaLink.value.length);
      this.textAreaLink.selectionStart = startPos;
      this.textAreaLink.selectionEnd = startPos;
    } else {
      if (prev) {
        if (startPos === 0) {
          return;
        }
        this.textAreaLink.value = this.textAreaLink.value.substring(0, startPos - 1)
            + this.textAreaLink.value.substring(endPos, this.textAreaLink.value.length);
        this.textAreaLink.selectionStart = startPos - 1;
        this.textAreaLink.selectionEnd = startPos - 1;
      }
      if (next) {
        this.textAreaLink.value = this.textAreaLink.value.substring(0, startPos)
            + this.textAreaLink.value.substring(endPos + 1, this.textAreaLink.value.length);
        this.textAreaLink.selectionStart = startPos;
        this.textAreaLink.selectionEnd = startPos;
      }
    }
  }

  navigateTextAreaCursor(up = false, left = false, down = false, right = false) {
    this.textAreaLink.focus();
    const startPos = this.textAreaLink.selectionStart;
    const endPos = this.textAreaLink.selectionEnd;
    if (up) {
      const separatorIndex = this.textAreaLink.value.substring(0, startPos).lastIndexOf('\n');
      const nextSeparatorIndex = this.textAreaLink.value.substring(0, separatorIndex).lastIndexOf('\n');
      const distance = startPos - separatorIndex;
      if (separatorIndex === -1) {
        return;
      }
      if ((separatorIndex - nextSeparatorIndex) > distance) {
        this.textAreaLink.selectionStart = nextSeparatorIndex + distance;
        this.textAreaLink.selectionEnd = nextSeparatorIndex + distance;
      } else {
        this.textAreaLink.selectionStart = separatorIndex;
        this.textAreaLink.selectionEnd = separatorIndex;
      }
    }
    if (down) {
      const preSeparatorIndex = this.textAreaLink.value.substring(0, startPos).lastIndexOf('\n');
      const postSeparatorIndex = startPos + this.textAreaLink.value.substring(startPos, this.textAreaLink.value.length).indexOf('\n');
      const nextSeparatorIndex = this.textAreaLink.value.substring(postSeparatorIndex + 1, this.textAreaLink.value.length).indexOf('\n') === -1 ? this.textAreaLink.value.length : postSeparatorIndex + this.textAreaLink.value.substring(postSeparatorIndex + 1, this.textAreaLink.value.length).indexOf('\n');
      if (this.textAreaLink.value.substring(startPos, this.textAreaLink.value.length).indexOf('\n') === -1) {
        return;
      }
      if (nextSeparatorIndex < postSeparatorIndex + (startPos - preSeparatorIndex)) {
        this.textAreaLink.selectionStart = nextSeparatorIndex + 1;
        this.textAreaLink.selectionEnd = nextSeparatorIndex + 1;
      } else {
        this.textAreaLink.selectionStart = postSeparatorIndex + (startPos - preSeparatorIndex);
        this.textAreaLink.selectionEnd = postSeparatorIndex + (startPos - preSeparatorIndex);
      }
    }
    if (right) {
      if (startPos !== endPos) {
        this.textAreaLink.selectionStart = endPos;
        this.textAreaLink.selectionEnd = endPos;
      } else {
        this.textAreaLink.selectionStart = startPos + 1;
        this.textAreaLink.selectionEnd = startPos + 1;
      }
    }
    if (left) {
      if (startPos !== endPos || startPos === 0) {
        this.textAreaLink.selectionStart = startPos;
        this.textAreaLink.selectionEnd = startPos;
      } else {
        this.textAreaLink.selectionStart = startPos - 1;
        this.textAreaLink.selectionEnd = startPos - 1;
      }
    }
  }
}
