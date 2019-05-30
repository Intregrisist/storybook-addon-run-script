export const WRAPPER_ID = 'storybooks-addon-run-script';

function getOrCreate(id: string) {
  const elementOnDom = document.getElementById(id);

  if (elementOnDom) {
    return elementOnDom;
  }

  const element = document.createElement('div');
  element.setAttribute('id', id);

  return element;
}

function getWrapperDiv() {
  return getOrCreate(WRAPPER_ID);
}

export const withRunScript = (runScript: string) => (storyFn: () => any) => {
  const script = document.createElement('script');
  script.append(runScript);

  const wrapper = getWrapperDiv();

  const element = storyFn();

  if (typeof element === 'string') {
    wrapper.innerHTML = element;
  } else if (element instanceof Node) {
    wrapper.appendChild(element);
  } else {
    return element;
  }

  wrapper.appendChild(script);

  return wrapper;
};

declare var module: any;

if (module && module.hot && module.hot.decline) {
  module.hot.decline();
}
