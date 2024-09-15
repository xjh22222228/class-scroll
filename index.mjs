/// <reference types="./types/index.d.ts" />
// Copyright @ 2024-present xiejiahe. All rights reserved. MIT license.
// See https://github.com/xjh22222228/class-scroll

const SCROLL_APPEARED = 'scrollAppeared';

/** @type {import('./types/index.d.ts')} */
function ClassScroll(targets) {
  targets = targets || [];
  this.targets = targets.map((item) => ({
    ...item,
    _classNames: item.className.split(/\s/).filter(Boolean),
  }));
  this.observers = [];
}

ClassScroll.prototype.init = function () {
  for (let i = 0; i < this.targets.length; i++) {
    const item = this.targets[i];
    const config = {
      root: item.root,
      rootmargin: item.rootmargin,
      threshold: item.threshold || 0,
    };
    const intersectionObserver = new IntersectionObserver((entries) => {
      const target = entries[0].target;
      const appeared = target.dataset[SCROLL_APPEARED] === 'true';
      if (entries[0].intersectionRatio <= 0) {
        if (appeared) {
          intersectionObserver.disconnect();
          target.removeAttribute('data-scroll-observer');
          target.removeAttribute('data-scroll-appeared');
        }
        item?.onHidden?.(entries);
        return;
      }

      if (
        item._classNames[0] &&
        target.classList.contains(item._classNames[0])
      ) {
        return;
      }

      if (!appeared) {
        target.dataset[SCROLL_APPEARED] = 'true';
      }

      item._classNames.forEach((className) => {
        if (item.delay) {
          setTimeout(() => {
            if (!target.classList.contains(className)) {
              target.classList.add(className);
            }
          }, item.delay);
        } else {
          if (!target.classList.contains(className)) {
            target.classList.add(className);
          }
        }
      });

      item?.onVisible?.(entries);
    }, config);

    const el =
      typeof item.el === 'object' ? item.el : document.querySelector(item.el);
    if (el) {
      el.dataset['scrollObserver'] = 'true';

      intersectionObserver.observe(el);
      this.observers.push({
        target: el,
        observer: intersectionObserver,
      });
    }
  }
};

function destroy() {
  this.observers.forEach((o) => {
    o?.observer?.disconnect?.();
  });
  this.observers = [];
}

ClassScroll.prototype.destroy = destroy;
ClassScroll.prototype.disconnect = destroy;

export default ClassScroll;
