<script setup>
import { useAlert } from "@/stores/useAlert";
import AlertItem from "@/components/Notification/AlertItem.vue"

defineProps({
    isDarkMode: {
        type: Boolean,
        default: false
    },
    ltr: {
        type: Boolean,
        default: false
    },
})

let alertStore = useAlert();

</script>

<template>
    <div class="NotificationContainer" :class="{ 'dark': isDarkMode , 'ltr': ltr }">
        <AlertItem v-for="alert in alertStore.alerts" :key="alert.id" :data="alert" />
    </div>
</template>

<style>
@import url("@/assets/css/notification.css");
</style>