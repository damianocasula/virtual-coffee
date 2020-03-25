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
      <label class="label" for="select-coffee-type">Select coffee type</label>
      <div class="fields">
        <div class="field">
          <div class="select">
            <select name="coffeeType" id="select-coffee-type">
              <option value="espresso">Espresso</option>
              <option value="corto">Corto</option>
              <option value="lungo">Lungo</option>
              <option value="macchiato">Macchiato</option>
              <option value="macchiato">Tea</option>
            </select>
          </div>
        </div>
        <div class="field">
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
        </div>
      </div>
    </form>

    <div class="counting-wrapper">
      <p>
        You brewed
        <span class="count">{{count}}</span> coffees (and teas, for you tea lovers) since you opened this website for the first time.
      </p>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

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
  computed: {
    ...mapGetters(['count'])
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

      await sleep(4500)
      this.done = true

      store.commit('increment')

      confetti.render()

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
  width: 25vw;
}

.brewing-space .image-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.brewing-space #coffee-break-image {
  margin-bottom: 1.25rem;
}

.brewing-space .counting-wrapper {
  margin-top: 1.25rem;
}

.brewing-space .fields {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}

.brewing-space .button,
.brewing-space .select,
.brewing-space select {
  width: 100%;
}

.brewing-space .count {
  font-size: 105%;
  font-weight: bold;
}
</style>
