const KEYS = {
  rus: {
    KeyQ: { shiftUp: 'й', shiftDown: 'Й', capsLock: 'Й' }, KeyW: { shiftUp: 'ц', shiftDown: 'Ц', capsLock: 'Ц' }, Backspace: { shiftUp: 'Backspace', shiftDown: 'Backspace', capsLock: 'Backspace' }, KeyE: { shiftUp: 'у', shiftDown: 'У', capsLock: 'У' }, KeyR: { shiftUp: 'к', shiftDown: 'К', capsLock: 'К' }, KeyT: { shiftUp: 'е', shiftDown: 'Е', capsLock: 'Е' }, KeyY: { shiftUp: 'н', shiftDown: 'Н', capsLock: 'Н' }, KeyU: { shiftUp: 'г', shiftDown: 'Г', capsLock: 'Г' }, KeyI: { shiftUp: 'ш', shiftDown: 'Ш', capsLock: 'Ш' }, KeyO: { shiftUp: 'щ', shiftDown: 'Щ', capsLock: 'Щ' }, KeyP: { shiftUp: 'з', shiftDown: 'З', capsLock: 'З' }, BracketLeft: { shiftUp: 'х', shiftDown: 'Х', capsLock: 'Х' }, BracketRight: { shiftUp: 'ъ', shiftDown: 'Ъ', capsLock: 'Ъ' }, Backslash: { shiftUp: '\\', shiftDown: '/', capsLock: '\\' }, KeyA: { shiftUp: 'ф', shiftDown: 'Ф', capsLock: 'Ф' }, KeyS: { shiftUp: 'ы', shiftDown: 'Ы', capsLock: 'Ы' }, KeyD: { shiftUp: 'в', shiftDown: 'В', capsLock: 'В' }, KeyF: { shiftUp: 'а', shiftDown: 'А', capsLock: 'А' }, KeyG: { shiftUp: 'п', shiftDown: 'П', capsLock: 'П' }, KeyH: { shiftUp: 'р', shiftDown: 'Р', capsLock: 'Р' }, KeyJ: { shiftUp: 'о', shiftDown: 'О', capsLock: 'О' }, KeyK: { shiftUp: 'л', shiftDown: 'Л', capsLock: 'Л' }, KeyL: { shiftUp: 'д', shiftDown: 'Д', capsLock: 'Д' }, Semicolon: { shiftUp: 'ж', shiftDown: 'Ж', capsLock: 'Ж' }, Quote: { shiftUp: 'э', shiftDown: 'Э', capsLock: 'Э' }, Enter: { shiftUp: 'Enter', shiftDown: 'Enter', capsLock: 'Enter' }, ShiftRight: { shiftUp: '', shiftDown: 'Shift', capsLock: '' }, Slash: { shiftUp: '.', shiftDown: ',', capsLock: '.' }, Period: { shiftUp: 'ю', shiftDown: 'Ю', capsLock: 'Ю' }, Comma: { shiftUp: 'б', shiftDown: 'Б', capsLock: 'Б' }, KeyM: { shiftUp: 'ь', shiftDown: 'Ь', capsLock: 'Ь' }, KeyN: { shiftUp: 'т', shiftDown: 'Т', capsLock: 'Т' }, KeyB: { shiftUp: 'и', shiftDown: 'И', capsLock: 'И' }, KeyV: { shiftUp: 'м', shiftDown: 'М', capsLock: 'М' }, KeyC: { shiftUp: 'с', shiftDown: 'С', capsLock: 'С' }, KeyX: { shiftUp: 'ч', shiftDown: 'Ч', capsLock: 'Ч' }, KeyZ: { shiftUp: 'я', shiftDown: 'Я', capsLock: 'Я' }, ShiftLeft: { shiftUp: '', shiftDown: 'Shift', capsLock: '' }, ControlLeft: { shiftUp: 'Control', shiftDown: 'Control', capsLock: 'Control' }, MetaLeft: { shiftUp: 'Meta', shiftDown: 'Meta', capsLock: 'Meta' }, AltLeft: { shiftUp: 'Alt', shiftDown: 'Alt', capsLock: 'Alt' }, Space: { shiftUp: ' ', shiftDown: ' ', capsLock: ' ' }, AltRight: { shiftUp: 'AltGraph', shiftDown: 'AltGraph', capsLock: 'AltGraph' }, ControlRight: { shiftUp: 'Control', shiftDown: 'Control', capsLock: 'Control' }, ArrowLeft: { shiftUp: 'ArrowLeft', shiftDown: 'ArrowLeft', capsLock: 'ArrowLeft' }, ArrowDown: { shiftUp: 'ArrowDown', shiftDown: 'ArrowDown', capsLock: 'ArrowDown' }, ArrowRight: { shiftUp: 'ArrowRight', shiftDown: 'ArrowRight', capsLock: 'ArrowRight' }, ArrowUp: { shiftUp: 'ArrowUp', shiftDown: 'ArrowUp', capsLock: 'ArrowUp' }, Equal: { shiftUp: '=', shiftDown: '+', capsLock: '=' }, Minus: { shiftUp: '-', shiftDown: '_', capsLock: '-' }, Digit0: { shiftUp: '0', shiftDown: ')', capsLock: '0' }, Digit9: { shiftUp: '9', shiftDown: '(', capsLock: '9' }, Digit8: { shiftUp: '8', shiftDown: '*', capsLock: '8' }, Digit7: { shiftUp: '7', shiftDown: '?', capsLock: '7' }, Digit6: { shiftUp: '6', shiftDown: ':', capsLock: '6' }, Digit5: { shiftUp: '5', shiftDown: '%', capsLock: '5' }, Digit4: { shiftUp: '4', shiftDown: ';', capsLock: '4' }, Digit3: { shiftUp: '3', shiftDown: '№', capsLock: '3' }, Digit2: { shiftUp: '2', shiftDown: '"', capsLock: '2' }, Digit1: { shiftUp: '1', shiftDown: '!', capsLock: '1' }, Backquote: { shiftUp: 'ё', shiftDown: 'Ё', capsLock: 'Ё' }, Tab: { shiftUp: 'Tab', shiftDown: 'Tab', capsLock: 'Tab' }, CapsLock: { shiftUp: 'CapsLock', shiftDown: 'CapsLock', capsLock: 'CapsLock' },
  },
  eng: {
    KeyQ: { shiftUp: 'q', shiftDown: 'Q', capsLock: 'Q' }, KeyW: { shiftUp: 'w', shiftDown: 'W', capsLock: 'W' }, KeyE: { shiftUp: 'e', shiftDown: 'E', capsLock: 'E' }, KeyR: { shiftUp: 'r', shiftDown: 'R', capsLock: 'R' }, KeyT: { shiftUp: 't', shiftDown: 'T', capsLock: 'T' }, KeyY: { shiftUp: 'y', shiftDown: 'Y', capsLock: 'Y' }, KeyU: { shiftUp: 'u', shiftDown: 'U', capsLock: 'U' }, KeyI: { shiftUp: 'i', shiftDown: 'I', capsLock: 'I' }, KeyO: { shiftUp: 'o', shiftDown: 'O', capsLock: 'O' }, KeyP: { shiftUp: 'p', shiftDown: 'P', capsLock: 'P' }, BracketLeft: { shiftUp: '[', shiftDown: '{', capsLock: '[' }, BracketRight: { shiftUp: ']', shiftDown: '}', capsLock: ']' }, Quote: { shiftUp: "'", shiftDown: '"', capsLock: "'" }, Semicolon: { shiftUp: ';', shiftDown: ':', capsLock: ';' }, KeyL: { shiftUp: 'l', shiftDown: 'L', capsLock: 'L' }, KeyK: { shiftUp: 'k', shiftDown: 'K', capsLock: 'K' }, KeyJ: { shiftUp: 'j', shiftDown: 'J', capsLock: 'J' }, KeyH: { shiftUp: 'h', shiftDown: 'H', capsLock: 'H' }, KeyG: { shiftUp: 'g', shiftDown: 'G', capsLock: 'G' }, KeyF: { shiftUp: 'f', shiftDown: 'F', capsLock: 'F' }, KeyD: { shiftUp: 'd', shiftDown: 'D', capsLock: 'D' }, KeyS: { shiftUp: 's', shiftDown: 'S', capsLock: 'S' }, KeyA: { shiftUp: 'a', shiftDown: 'A', capsLock: 'A' }, KeyZ: { shiftUp: 'z', shiftDown: 'Z', capsLock: 'Z' }, KeyX: { shiftUp: 'x', shiftDown: 'X', capsLock: 'X' }, KeyC: { shiftUp: 'c', shiftDown: 'C', capsLock: 'C' }, KeyV: { shiftUp: 'v', shiftDown: 'V', capsLock: 'V' }, KeyB: { shiftUp: 'b', shiftDown: 'B', capsLock: 'B' }, KeyN: { shiftUp: 'n', shiftDown: 'N', capsLock: 'N' }, KeyM: { shiftUp: 'm', shiftDown: 'M', capsLock: 'M' }, Comma: { shiftUp: ',', shiftDown: '<', capsLock: ',' }, Period: { shiftUp: '.', shiftDown: '>', capsLock: '.' }, Slash: { shiftUp: '/', shiftDown: '?', capsLock: '/' }, CapsLock: { shiftUp: 'CapsLock', shiftDown: 'CapsLock', capsLock: 'CapsLock' }, Backslash: { shiftUp: '\\', shiftDown: '|', capsLock: '\\' }, Enter: { shiftUp: 'Enter', shiftDown: 'Enter', capsLock: 'Enter' }, ShiftRight: { shiftUp: '', shiftDown: 'Shift', capsLock: '' }, ArrowUp: { shiftUp: 'ArrowUp', shiftDown: 'ArrowUp', capsLock: 'ArrowUp' }, ArrowLeft: { shiftUp: 'ArrowLeft', shiftDown: 'ArrowLeft', capsLock: 'ArrowLeft' }, ArrowDown: { shiftUp: 'ArrowDown', shiftDown: 'ArrowDown', capsLock: 'ArrowDown' }, ArrowRight: { shiftUp: 'ArrowRight', shiftDown: 'ArrowRight', capsLock: 'ArrowRight' }, ControlRight: { shiftUp: 'Control', shiftDown: 'Control', capsLock: 'Control' }, AltRight: { shiftUp: 'Alt', shiftDown: 'AltGraph', capsLock: 'AltGraph' }, Space: { shiftUp: ' ', shiftDown: ' ', capsLock: ' ' }, AltLeft: { shiftUp: 'Alt', shiftDown: 'Alt', capsLock: 'Alt' }, MetaLeft: { shiftUp: 'Meta', shiftDown: 'Meta', capsLock: 'Meta' }, ControlLeft: { shiftUp: 'Control', shiftDown: 'Control', capsLock: 'Control' }, ShiftLeft: { shiftUp: '', shiftDown: 'Shift', capsLock: '' }, Tab: { shiftUp: 'Tab', shiftDown: 'Tab', capsLock: 'Tab' }, Backquote: { shiftUp: '`', shiftDown: '~', capsLock: '`' }, Digit1: { shiftUp: '1', shiftDown: '!', capsLock: '1' }, Digit2: { shiftUp: '2', shiftDown: '@', capsLock: '2' }, Digit3: { shiftUp: '3', shiftDown: '#', capsLock: '3' }, Digit4: { shiftUp: '4', shiftDown: '$', capsLock: '4' }, Digit5: { shiftUp: '5', shiftDown: '%', capsLock: '5' }, Digit6: { shiftUp: '6', shiftDown: '^', capsLock: '6' }, Digit7: { shiftUp: '7', shiftDown: '&', capsLock: '7' }, Digit8: { shiftUp: '8', shiftDown: '*', capsLock: '8' }, Digit9: { shiftUp: '9', shiftDown: '(', capsLock: '9' }, Digit0: { shiftUp: '0', shiftDown: ')', capsLock: '0' }, Minus: { shiftUp: '-', shiftDown: '_', capsLock: '-' }, Equal: { shiftUp: '=', shiftDown: '+', capsLock: '=' }, Backspace: { shiftUp: 'Backspace', shiftDown: 'Backspace', capsLock: 'Backspace' },
  },
};

const KEYS_LAYOUT = [
  'Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];
export { KEYS, KEYS_LAYOUT };
