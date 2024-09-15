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
      classScroll: null,
    },
    created() {
      for (var i = 0; i < 6; i++) {
        const paylaod = {
          items: [],
        };
        for (var j = 0; j < 30; j++) {
          paylaod.items.push({
            index: j,
            height: random(),
            background: randomColor(),
          });
        }
        this.array.push(paylaod);
      }

      this.$nextTick(() => {
        this.init();
      });
    },

    methods: {
      // Core code
      init() {
        const els = document.querySelectorAll('.bg');
        const params = [];
        els.forEach((el, i) => {
          params.push({
            el: el,
            className: 'animate__animated animate__fadeInUp',
            forwards: false,
            threshold: [0, 0.5, 1],
            onVisible(e) {
              console.log('onVisible', e);
            },
            onHidden(e) {},
          });
        });
        this.classScroll = new ScrollObserver(params);
        this.classScroll.init();
      },

      handleDestroy() {
        if (this.classScroll) {
          this.classScroll.destroy();
        }
      },
    },
  });
};
