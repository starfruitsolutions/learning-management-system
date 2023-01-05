<template>
  <p
    class="codepen"
    data-height="300"
    data-theme-id="dark"
    data-default-tab="js"
    :data-slug-hash="hash"
    data-editable="true"
    data-user="starfruitsolutions"
    style="
      height: 300px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid;
      margin: 1em 0;
      padding: 1em;
    "
  />
</template>

<script>
export default {
  props: ['hash'],
  mounted() {
    let codepen = document.createElement('script')
    codepen.setAttribute(
      'src',
      'https://cpwebassets.codepen.io/assets/embed/ei.js'
    )
    document.head.appendChild(codepen)
  },
}
</script>

<style lang="scss" scoped></style>
