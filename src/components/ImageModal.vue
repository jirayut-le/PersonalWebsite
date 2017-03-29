<template>
  <image-modal :visible="visible" @close="close" transition="roll">
    <p class="image is-1by1"><img src="../assets/MyProfile.jpg"></p>
  </image-modal>
</template>

<script>
import { ImageModal } from 'vue-bulma-modal'
export default {
  components: {
    ImageModal
  },
  props: {
    visible: Boolean
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>
