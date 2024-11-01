<script setup>
import { useAlert } from "@/stores/useAlert";
import AlertItem from "@/components/Notification/AlertItem.vue"

let alertStore = useAlert();

</script>

<template>
    <div class="NotificationContainer">
        <AlertItem v-for="alert in alertStore.alerts" :key="alert.id" :data="alert" />
    </div>
</template>

<style scoped>
@import url('@/assets/css/components/Notification/NotificationContainer.css');
</style>