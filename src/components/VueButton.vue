<template>
  <button @click="onClick" @dblclick="onDoubleClick" :class="[
    'nice-handsome-button',
    'nice-handsome-button--' + color,
    'nice-handsome-button--' + size,
    {
      'nice-handsome-button--rounded': rounded,
    },
  ]">
    <slot>Click me

    </slot>
  </button>
</template>

<script setup lang="ts">
export interface Props {
  color: string
  rounded: boolean,
  size: string
}
withDefaults(defineProps<Props>(), {
  color: "blue",
  rounded: true,
  size: 'default'
})
const onClick = (event: Event) => {
  emit("click", event);
}
const onDoubleClick = (event: Event) => {
  emit("dblclick", event);
}
const emit = defineEmits<{
  (e: 'click', event: Event): void
  (e: 'dblclick', event: Event): void
}>()
</script>

<style lang="scss" scoped>
.nice-handsome-button {
  display: inline-block;
  outline: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #ffffff;
  font-weight: 500;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  user-select: none;
  cursor: pointer;
}

/* --> COLORS <-- */
.nice-handsome-button--blue {
  background-color: #0194ef;
}

.nice-handsome-button--green {
  background-color: #1bb934;
}

.nice-handsome-button--red {
  background-color: #e1112c;
}

/* --> SIZES <-- */
.nice-handsome-button--small {
  padding: 8px 10px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 12px;
}

.nice-handsome-button--default {
  padding: 12px 14px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 16px;
}

.nice-handsome-button--large {
  padding: 16px 18px;
  border-radius: 8px;
  font-size: 16px;
  line-height: 20px;
}

/* --> BOOLEANS <-- */
.nice-handsome-button--rounded {
  border-radius: 60px;
}
</style>