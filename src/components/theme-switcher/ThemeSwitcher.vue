<template>
  <div
    class="theme-switcher"
    @click="switchTheme"
  />
</template>

<script>
export default {
  data() {
    return {
      default: 'light',
      twoMode: 'dark',
    };
  },
  methods: {
    switchTheme() {
      const elem = document.documentElement;

      if (elem.getAttribute('data-theme') !== this.twoMode) {
        elem.setAttribute('data-theme', this.twoMode);
      } else {
        elem.setAttribute('data-theme', this.default);
      }
    },
  },
};
</script>

<style lang="scss">
.theme-switcher {
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background: #000;
  clip-path: circle(20px at top left);
  cursor: pointer;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 0.75;
  }
}

html {
  &[data-theme='dark'] {
    .theme-switcher {
      background: #fff;
    }
  }
}
</style>
