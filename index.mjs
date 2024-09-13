// Copyright @ 2024-present xiejiahe. All rights reserved. MIT license.
// See https://github.com/xjh22222228/class-scroll

const SCROLL_BOOL = 'scroll';

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
      threshold: item.threshold,
    };
    const intersectionObserver = new IntersectionObserver((entries) => {
      const target = entries[0].target;
      const isScroll = target.dataset[SCROLL_BOOL];
      if (entries[0].intersectionRatio <= 0) {
        if (isScroll) {
          if (item.forwards === false) {
            item._classNames.forEach((className) => {
              target.classList.remove(className);
            });
          } else {
            intersectionObserver.disconnect();
          }
        }

        return;
      }
      // 首次
      if (isScroll == null) {
        target.dataset[SCROLL_BOOL] = 'true';
      }
      item._classNames.forEach((className) => {
        if (item.delay) {
          setTimeout(() => {
            target.classList.add(className);
          }, item.delay);
        } else {
          target.classList.add(className);
        }
      });
    }, config);
    const el =
      typeof item.el === 'object' ? item.el : document.querySelector(item.el);
    if (el) {
      intersectionObserver.observe(item.el);
      this.observers.push(intersectionObserver);
    }
  }
};

function destroy() {
  this.observers.forEach((o) => {
    o.disconnect();
  });
}

ClassScroll.prototype.destroy = destroy;
ClassScroll.prototype.disconnect = destroy;

export default ClassScroll;
