<script setup>
import { computed, ref } from 'vue'
import { useAlert } from "@/stores/useAlert";

let props = defineProps({
    data: Object
})

let alertStore = useAlert()
let AlertClass = ref('show');

// calculate Height
let AlertItem = ref(null)

let MarginTop = computed(() => (AlertItem.value?.clientHeight + 15) * -1)

const removeAlertItem = () => {
    AlertClass.value = 'remove'
    setTimeout(() => {
        alertStore.removeToast(props.data.id)
    }, 600);
}


</script>

<template>
    <div :class="`AlertBox ${data.type} ${AlertClass}`" ref="AlertItem" :style="{ '--top': MarginTop + 'px' }">
        <div class="right-alert">
            <div class="icon">
                <svg viewBox="0 0 32 32" class="circle">
                    <circle :style="{ '--timer': data.timer + 's' }" cx="16" cy="16" r="15"
                        class="v3:ar-toast__circle v3:ar-toast__circle--danger" @animationend="removeAlertItem">
                    </circle>
                </svg>
                <svg class="icon-svg" v-if="data.type == 'error'" width="20" height="20" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.5 9L15.5 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M15.5 9L9.5 15" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12.5 21C7.52944 21 3.5 16.9706 3.5 12V12C3.5 7.02944 7.52944 3 12.5 3V3C17.4706 3 21.5 7.02944 21.5 12V12C21.5 16.9706 17.4706 21 12.5 21V21Z"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <svg class="icon-svg" v-if="data.type == 'success'" width="20" height="20" viewBox="0 0 24 24"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 21V21C7.029 21 3 16.971 3 12V12C3 7.029 7.029 3 12 3V3C16.971 3 21 7.029 21 12V12C21 16.971 16.971 21 12 21Z"
                        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M16 10L11 15L8 12" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                    </path>
                </svg>
                <svg class="icon-svg" v-if="data.type == 'warning'" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <path
                        d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                    <path d="M12,5a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V6A1,1,0,0,0,12,5Z" />
                    <rect x="11" y="17" width="2" height="2" rx="1" />
                </svg>
            </div>
            <p class="title">{{ data.title }}</p>
        </div>
        <div class="left-alert">
            <div class="removeIcon" @click="removeAlertItem">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M4.36361 4.36361C4.71508 4.01214 5.28493 4.01214 5.6364 4.36361L19.6364 18.3636C19.9879 18.7151 19.9879 19.2849 19.6364 19.6364C19.2849 19.9879 18.7151 19.9879 18.3636 19.6364L4.36361 5.6364C4.01214 5.28493 4.01214 4.71508 4.36361 4.36361Z">
                    </path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M19.6364 4.36361C19.9879 4.71508 19.9879 5.28493 19.6364 5.6364L5.6364 19.6364C5.28493 19.9879 4.71508 19.9879 4.36361 19.6364C4.01214 19.2849 4.01214 18.7151 4.36361 18.3636L18.3636 4.36361C18.7151 4.01214 19.2849 4.01214 19.6364 4.36361Z">
                    </path>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('@/assets/css/components/Notification/AlertItem.css');
</style>