<template>
  <div class="hello-world">
    Hello {{ name }} !
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    named: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'popa',
    },
  },
}
</script>
