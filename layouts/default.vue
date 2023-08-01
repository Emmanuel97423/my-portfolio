<script setup lang="ts">

const updateCoordinates: (e) => void = (e) => {
    console.log('e:', e.clientX, e.clientY);

}
</script>
<template>
    <div @mousemove="updateCoordinates"
        class="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
        <div class="group/spotlight relative">
            <div class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
                style="background: radial-gradient(600px at 1055px 275px, rgba(29, 78, 216, 0.15), transparent 80%);"></div>
            <slot />

        </div>
    </div>
</template>