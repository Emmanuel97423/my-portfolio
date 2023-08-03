<script setup lang="ts">
import { useClientX, useClientY } from '../composables/state';
const clientX = useClientX();
const clientY = useClientY();


const gradient = ref('radial-gradient(600px at 0% 0%, rgba(29, 78, 216, 0.15), transparent 80%)');

const updateCoordinates: (e: MouseEvent) => void = (e) => {

    // console.log('e:', e.clientX, e.clientY);
    // clientX.value = e.clientX * 100 / window.innerWidth + "%";
    // clientY.value = e.clientY * 100 / window.innerWidth + "%";

    clientX.value = e.pageX + "px";
    clientY.value = e.pageY + "px";

    gradient.value = `radial-gradient(600px at ${clientX.value} ${clientY.value}, rgba(29, 78, 216, 0.15), transparent 80%)`;
    // const clientX = clientX();


}
</script>
<template >
    <div @mousemove="updateCoordinates"
        class=" bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div class=" group/spotlight relative">
            <div class=" pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                :style="{ background: gradient }"></div>
            <div class="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
                <slot />
            </div>
        </div>
    </div>
</template>

