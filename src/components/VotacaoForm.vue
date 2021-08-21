<template>
  <form>
    <textarea v-model="pergunta" />
    <input type="text" v-model="option1" />
    <input type="text" v-model="option2" />
    <input type="text" v-model="option3" />
    <input type="text" v-model="option4" />
    <input type="submit" value="Atualizar" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      pergunta: '',
      option1: '',
      option2: '',
      option3: '',
      option4: ''
    }
  }
}
</script>