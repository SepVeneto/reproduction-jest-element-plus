<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-select v-model="input" :options="[{ label: 'a', value: 'a'}]" />
  </div>
</template>

<script lang="ts">
import { ElSelect } from "element-plus"
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    ElSelect,
  },
  data() {
    return {
      input: '',
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>