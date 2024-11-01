<script setup>
import NotificationContainer from '@/components/Notification/NotificationContainer.vue'
import toast from '@/composables/Alert.js'
</script>

<template>
  <NotificationContainer />

  <div class="Buttons">
    <div class="btns success" @click="toast('متن پیام  موفقیت  آمیز')">success</div>
    <div class="btns error" @click="toast('متن پیام ارور', 'error', 8)">error</div>
    <div class="btns warning" @click="toast('متن پیام هشدار', 'warning')">warning</div>
  </div>

</template>

<style scoped>
@import url("@/assets/css/app.css");
</style>