<template>
  <div class="panel brewing-space">
    <div class="image-container">
      <img
        class="image"
        id="coffee-break-image"
        src="@/assets/img/fogg-coffee-break.png"
        alt="Beach coffee break"
      />
    </div>
    <h1 class="title">Welcome to {{heading}}</h1>
    <h2 class="subtitle">Brew a virtual coffee for yourself</h2>

    <form action>
      <div class="field">
        <label class="label" for="select-coffee-type">Select coffee type</label>
        <div class="select">
          <select name="coffeeType" id="select-coffee-type">
            <option value="espresso">Espresso</option>
            <option value="corto">Corto</option>
            <option value="lungo">Lungo</option>
            <option value="macchiato">Macchiato</option>
          </select>
        </div>
      </div>
      <button
        class="button is-dark disabled"
        type="submit"
        :disabled="brewing"
        @click.prevent="brew()"
        v-if="!brewing && !done"
      >
        <span>Brew your coffee</span>
      </button>
      <button v-if="brewing && !done" class="button is-dark disabled">
        <span>Brewing...</span>
      </button>
      <button v-if="done" class="button is-green is-done is-success disabled">
        <span>Brewed!</span>
      </button>
    </form>
  </div>
</template>

<script>
function sleep (ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default {
  name: 'BrewingSpace',
  data () {
    return {
      brewing: false,
      done: false
    }
  },
  props: {
    heading: String
  },
  methods: {
    async brew () {
      // eslint-disable-next-line no-undef
      const confetti = new ConfettiGenerator({
        target: 'confetti',
        rotate: true,
        clock: 35
      })
      this.brewing = true
      // eslint-disable-next-line no-undef
      await sleep(4500)
      this.done = true
      confetti.render()
      // eslint-disable-next-line no-undef
      await sleep(2500)
      this.done = false
      confetti.clear()
      this.brewing = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.brewing-space {
  padding: 1.5rem;
  background-color: white;
  z-index: 2;
}

.brewing-space .image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.brewing-space #coffee-break-image {
  max-width: 400px;
  padding-bottom: 1.5rem;
}
</style>
