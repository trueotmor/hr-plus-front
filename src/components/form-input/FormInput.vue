<script setup lang="ts">
defineProps({
    label: {
        type: [String, Boolean],
        default: '',
    },
    labelClass: {
        type: String,
        default: ''
    },
    inputClass: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: '',
    },
    inputID: {
        type: String,
        default: '',
    },
});

</script>
 
<template>
    <div class="relative">
        <input type="text" :value="modelValue"
            @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)" :id="inputID" :class="inputClass"
            placeholder=" " autocomplete="off" />
        <label v-if="label" :class="labelClass" :for="inputID">{{ label }}</label>
    </div>
</template>
