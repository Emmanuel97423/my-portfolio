<script setup lang="ts">
import { ProjectProps } from '../../types/types'


defineProps<{
    data: ProjectProps[]
}>()
</script>
<template>
    <table id="content" class="mt-12 w-full border-collapse text-left">

        <thead class="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
            <tr>
                <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Année</th>
                <th class="py-4 pr-8 text-sm font-semibold text-slate-200">Projet</th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Entreprise</th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">Stack</th>
                <th class="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">Lien</th>

            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" class="border-b border-slate-300/10 last:border-none">
                <td class="py-4 pr-4 align-top text-sm">
                    <div class="translate-y-px">{{ item.year }}</div>

                </td>
                <td class="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                    <div>
                        <div class="block sm:hidden">
                            <span>{{ item.project }}</span>
                        </div>
                        <div class="hidden sm:block">
                            {{ item.project }}
                        </div>
                    </div>
                </td>
                <td class="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                    <div class="translate-y-px whitespace-nowrap">
                        {{ item.company }}
                    </div>
                </td>

                <td class="hidden py-4 pr-4 align-top lg:table-cell">
                    <ul class="flex -translate-y-1.5 flex-wrap">
                        <li v-for="stack in item.stack" class="my-1 mr-1.5">
                            <div
                                class="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                {{ stack }}
                            </div>
                        </li>
                    </ul>
                </td>
                <td v-if="item.link" class="hidden py-4 align-top sm:table-cell">
                    <ul class="translate-y-1">
                        <li class="mb-1 flex items-center">
                            <NuxtLink :to='item.link.url' target="_blank" rel="noreferrer" aria-label="babone.com"
                                class="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 text-sm text-slate-400 hover:text-slate-200 focus-visible:text-teal-300 group/link text-sm">
                                <span>
                                    <span v-if="item.link.type === 'link'" class="inline-block">
                                        {{ item.link.name }}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                                            aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                    </span>
                                    <span v-if="item.link.type === 'github'" class="inline-block flex">
                                        <span>GitHub</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                            class="ml-1.5 h-3.5 w-3.5 shrink-0" aria-hidden="true">
                                            <path
                                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                                            </path>
                                        </svg>
                                    </span>
                                </span>
                            </NuxtLink>
                        </li>
                    </ul>
                </td>
            </tr>


        </tbody>
    </table>
</template>