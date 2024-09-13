import ScrollObserver from './index.mjs';

window.onload = () => {
  function random() {
    return Math.floor(Math.random() * (600 - 200 + 1)) + 200;
  }
  function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  }

  new Vue({
    el: '#app',
    data: {
      array: [],
    },
    created() {
      for (var i = 0; i < 200; i++) {
        this.array.push({
          index: i,
          height: random(),
          background: randomColor(),
        });
      }

      this.$nextTick(() => {
        const els = document.querySelectorAll('.item');
        const params = [];
        els.forEach((el, i) => {
          params.push({
            el: el,
            forwards: true,
            className: 'animate__animated animate__fadeIn',
          });
        });
        const data = new ScrollObserver(params);
        data.init();
      });
    },
  });
};
