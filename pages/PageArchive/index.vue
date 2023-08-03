<script setup lang="ts">
import { useDataProjects } from "../../composables/state";

const data = useDataProjects()

// const data = [
//     {
//         id: 1,
//         year: 2023,
//         project: 'Babone logiciel ERP',
//         company: 'Littoral Pêche',
//         stack: ['vite', 'TypeScript', 'React', 'Redux Toolkit', 'Tailwind', 'Tauri'],
//         link: {
//             type: 'github',
//             name: 'github.com/Emmanuel97423/babone',
//             url: 'https://github.com/Emmanuel97423/babone'
//         }
//     },
//     {
//         id: 1,
//         year: 2022,
//         project: 'Exotrap (MVP)',
//         company: 'Exotrap',
//         stack: ['Vue', 'Nuxt', 'Vuex', 'Bootstrap', 'Node Js', 'Express Js', 'MongoDb', 'Netlify'],
//         link: {
//             type: 'link',
//             name: 'exo-trap.re',
//             url: 'https://www.exo-trap.re/'

//         }

//     }
// ]
</script>
<template>
    <div class="lg:py-24">

        <NuxtLink to="/" class="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                class="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2" aria-hidden="true">
                <path fill-rule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clip-rule="evenodd"></path>
            </svg>
            Emmanuel Narcisse
        </NuxtLink>
        <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Projets</h1>
        <PageArchiveList :data="data" />

    </div>
</template>