<template>
  <div>
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation">
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/">
          <div class="tags has-addons">
            <span class="tag is-info has-text-weight-bold">Blue</span>
            <span class="tag is-dark">0.01</span>
          </div>
        </a>
      </div>
    </nav>
    <div class="container">
      <EventNode/>
    </div>
  </div>
</template>

<script>
import EventNode from './EditorPage/EventNode'

export default {
  name: 'EditorPage',
  components: { EventNode },
  methods: {
    open (link) {
      // this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all.sass"
.navbar-brand
  background-color: $grey-dark

</style>
