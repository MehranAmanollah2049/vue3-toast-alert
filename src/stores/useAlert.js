import { defineStore } from "pinia";
import { ref } from "vue";

export const useAlert = defineStore('alerts', () => {

    let alerts = ref([]);

    let createToast = (data) => {
        alerts.value.push({
            id: alerts.value.length + 1,
            ...data
        })
    }

    let removeToast = (id) => {
        alerts.value = alerts.value.filter(alert => alert.id != id)
    }


    return { alerts, createToast, removeToast }

})