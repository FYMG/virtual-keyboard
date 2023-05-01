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
  textArea.placeholder = 'Клавиатура создана в операционной системе Windows\nДля переключения языка комбинация: левыe ctrl + alt';
  main.append(textArea);
  return main;
};

document.body.append(createMain());
const keyboard = new Keyboard();
document.body.append(keyboard.createComponent());
