<template>
  <div>
    <label>選甚麼呢 ?</label>
    <select v-model="selected">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.text }}</option>
    </select>
    <h3>{{ selected }}</h3>
  </div>
</template>

    <script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
    };
  }
};
</script>