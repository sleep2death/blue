<template>
  <div class="container">
    <div class="panel">
      <p class="panel-heading">Hello</p>
    </div>
    <div class="node-box">
      <p class="node-box-heading">
        <span class="icon">
          <span class="fas fa-link"/>
        </span>
        OnPlayerEnter
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventNode',
  components: {},
  methods: {
    open (link) {
      // this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all.sass"
.node-box
  margin: 0.5em
  padding: 0
  max-width: 15em
  line-style: none

  .node-box-heading
    background-color: $white-ter
    font-color: $grey-dark
    border: 1px solid $border
    padding: 0.2em 0.4em
    border-radius: $radius $radius 0 0
</style>
