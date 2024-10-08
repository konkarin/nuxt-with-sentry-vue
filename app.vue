<template>
  <button @click="causeError">causeError</button>
</template>

<script setup>
const causeError = () => {
  throw new Error('error');
};
</script>
