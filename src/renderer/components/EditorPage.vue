<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <div class="tags has-addons">
          <span class="tag is-info has-text-weight-bold">Blue</span>
          <span class="tag is-dark">0.01</span>
        </div>
      </a>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'editor-page',
    components: { },
    methods: {
      open (link) {
        // this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="sass">
@import "~bulma/sass/utilities/initial-variables.sass"
.navbar-brand
  background-color: $grey-dark

.logo
  color: $blue
  font-size: $size-4
  font-weight: $weight-bold
  margin-right: $gap
</style>
