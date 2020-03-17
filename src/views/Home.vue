<template>
  <div class="home">
    <div class="confetti">
      <canvas id="confetti"></canvas>
    </div>

    <div class="github-ribbon-container">
      <a href="https://github.com/damianocasula/virtual-coffee">
        <img
          width="149"
          height="149"
          src="https://github.blog/wp-content/uploads/2008/12/forkme_left_darkblue_121621.png?resize=149%2C149"
          class="attachment-full size-full"
          alt="Fork me on GitHub"
          data-recalc-dims="1"
        />
      </a>
    </div>

    <div class="page">
      <BrewingSpace :heading="heading" />

      <footer id="footer" class="footer">
        <p>
          Created with
          <span class="emoji">☕</span> by
          <a href="https://casula.me">Damiano Casula</a>
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import BrewingSpace from '@/components/BrewingSpace.vue'

export default {
  name: 'Home',
  data () {
    return {
      heading: 'Virtual Coffee'
    }
  },
  components: {
    BrewingSpace
  }
}
</script>

<style>
.page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
}

.confetti,
.github-ribbon-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

#footer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  padding: 0.45rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(20, 20, 20, 0.09),
    0 0 0 1px rgba(20, 20, 20, 0.02);
  z-index: 2;
}

.footer .emoji {
  font-size: 125%;
}
</style>
