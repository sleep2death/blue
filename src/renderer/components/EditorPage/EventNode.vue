<template>
  <div class="node-box">
    <p class="node-box-heading has-background-light is-unselectable">
      <span class="icon">
        <span class="fa fa-caret-square-o-right"/>
      </span>
      OnPlayerEnter
    </p>
    <div class="columns is-mobile is-gapless">
      <div class="column col-left has-vertically-aligned-content">
        <p class="left-ele">Left</p>
        <p class="left-ele">Left</p>
        <p class="left-ele">Left</p>
        <p class="left-ele">Left</p>
        <p class="left-ele">Left</p>
        <p class="left-ele">Left</p>
      </div>
      <div class="column col-right has-vertically-aligned-content">
        <p class="right-ele">Right</p>
        <p class="right-ele">Right</p>
        <p class="right-ele">Right</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EventNode',
  components: {},
  data: function () {
    return {
      iconClass: 'has-text-danger icon'
    }
  },
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
  margin: 0.5em;
  padding: 0;
  width: 15em;
  line-style: none;

  .node-box-heading
    border: 1px solid $border;
    padding: 0.2em 0.4em;
    border-radius: $radius $radius 0 0;

  .column.has-vertically-aligned-content
    display: flex;
    flex-direction: column;
    justify-content: center;

  .col-left
    border-bottom: 1px solid $border;
    border-left: 1px solid $border;
    flex-direction: row;

  .left-ele
    padding-left: 0.25em;
    margin: auto auto auto 0;

  .col-right
    border-bottom: 1px solid $border;
    border-right: 1px solid $border;
    flex-direction: row;

  .right-ele
    padding-right: 0.25em;
    margin: auto 0 auto auto;
</style>
