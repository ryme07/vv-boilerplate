<template>
  <div>
    <VueButton :rounded="true" color="red" size="large" @click="clickMe" />
  </div>
</template>

<script setup lang="ts">
import VueButton from "@/components/VueButton.vue";

const clickMe = (): void => console.log('click');
</script>

