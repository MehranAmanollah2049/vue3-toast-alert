import { useAlert } from "@/stores/useAlert";

export default function toast(title, type = 'success', timer = 5) {

    let alertStore = useAlert();

    alertStore.createToast({ title, type, timer });

}