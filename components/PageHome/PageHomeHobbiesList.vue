<script setup lang="ts">
import { HobbieProps } from '../../types/types'
defineProps<{
    hobbies: HobbieProps[]
}>()
</script>
<template>
    <ul class="group/list">
        <li v-for="hobbie in hobbies" class="mb-12">
            <div
                class="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div
                    class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                </div>
                <img :src="hobbie.imgUrl" alt="more" loading="lazy" decoding="async"
                    class="z-10 col-span-2 rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:col-span-2"
                    style="color: transparent;" />
                <div class="z-10 col-span-6">
                    <p class="-mt-1 text-sm font-semibold leading-6">{{ hobbie.start }} - {{ hobbie.end }}</p>
                    <p class="-mt-1 text-sm leading-6"> {{ hobbie.role }}</p>
                    <h3 class="-mt-1">
                        <NuxtLink :to="hobbie.link" target="_blank" rel="noreferrer"
                            class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                            <span
                                class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>{{ hobbie.title }} ·

                                <span class="inline-block">
                                    {{ hobbie.branch }}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </NuxtLink>
                    </h3>
                </div>
            </div>
        </li>
    </ul>
</template>