<script setup lang="ts">
import PageHomeExperiencesList from '../components/PageHome/PageHomeExperiencesList.vue';
import { useDataExperiences, useDataProjects, useDataHobbies } from '../composables/state';

const experiences = useDataExperiences();
const projects = useDataProjects();
const hobbies = useDataHobbies();

</script>

<template>
    <div class="lg:flex lg:justify-between lg:gap-4">
        <header class="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 class="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">Emmanuel Narcisse</h1>
                <h2 class="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl ">Développeur
                    Concepteur
                    Logiciel
                </h2>
                <p class="mt-4 max-w-xs leading-normal">Je crée des produits et des expériences numériques accessibles et
                    inclusifs pour le web, les appareils mobiles et les ordinateurs de bureau.
                </p>
                <nav class="nav hidden lg:block" aria-label="In-page jump links">
                    <ul class="mt-16 w-max">
                        <li>
                            <NuxtLink to="#about" class="group flex items-center py-3 active">
                                <span
                                    class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span
                                    class="font-inter nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">A
                                    propos</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#experiences" class="group flex items-center py-3 active">
                                <span
                                    class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span
                                    class="font-inter nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    Expériences</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#projects" class="group flex items-center py-3 active">
                                <span
                                    class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span
                                    class="font-inter nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    projets</span>
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="#hobbies" class="group flex items-center py-3 active">
                                <span
                                    class="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                                <span
                                    class="font-inter nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                                    hobbies</span>
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>

            </div>
            <ul class="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li class="mr-5 text-xs">
                    <NuxtLink to='https://github.com/Emmanuel97423' target="_blank" class="block hover:text-slate-200">
                        <span class="sr-only">Github</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="h-6 w-6"
                            aria-hidden="true">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                            </path>
                        </svg>
                    </NuxtLink>
                </li>
                <li class="mr-5 text-xs">
                    <NuxtLink to='https://www.linkedin.com/in/emmanuel-narcisse/' target="_blank"
                        class="block hover:text-slate-200">
                        <span class="sr-only">Linkedin</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"
                            aria-hidden="true">
                            <path
                                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z">
                            </path>
                        </svg>
                    </NuxtLink>
                </li>
                <li class="mr-5 text-xs">
                    <NuxtLink to='https://twitter.com/JS_Juggler' target="_blank" class="block hover:text-slate-200">
                        <span class="sr-only">Tweeter</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 248 204" fill="currentColor" class="h-6 w-6"
                            aria-hidden="true">
                            <path id="white_background"
                                d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04   C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66   c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64   c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76   c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26   c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z">
                            </path>
                        </svg>
                    </NuxtLink>
                </li>
            </ul>

            <!-- <div>
            <nav>
              <ul>
                <li>A propos</li>
                <li>Expériences</li>
                <li>Projets</li>
              </ul>
            </nav>
          </div>
          <div>
            <ul>
              <li>Github</li>
              <li>Linkedin</li>
              <li>Tweeter</li>
            </ul>
          </div> -->
        </header>
        <main id="id" class="h-full pt-24 lg:w-1/2 lg:py-24">
            <section id="about" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                <div
                    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">A propos</h2>

                    <!-- <p>
                            Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first
                            into the
                            rabbit
                            hole of coding and web development. Fast-forward to today, and I’ve had the privilege of
                            building software
                            for
                            an
                            advertising agency, a start-up, a student-led design studio, and a huge corporation.

                            My main focus these days is building products and leading projects for our clients at
                            Upstatement. In my
                            free
                            time
                            I've also released an online video course that covers everything you need to know to build a web
                            app with
                            the
                            Spotify API.

                            When I’m not at the computer, I’m usually rock climbing, hanging out with my wife and two cats,
                            or running
                            around
                            Hyrule searching for Koro seed.
                        </p> -->
                </div>
                <div>
                    <p class="mb-4">En 2008, j'ai décidé de me lancer dans la création d'applications web, plongeant tête la
                        première dans l'univers passionnant de la programmation et du développement web. Aujourd'hui, après
                        avoir vécu des expériences incroyables, je suis fier d'avoir eu l'opportunité de construire des
                        logiciels pour
                        <NuxtLink to="#" rel="noreferre"
                            class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                            des agences,
                        </NuxtLink> en <NuxtLink to="#" rel="noreferre"
                            class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                            start-up</NuxtLink>,
                        et <NuxtLink to="#" rel="noreferre"
                            class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"> diverses
                            entreprises.
                        </NuxtLink>
                    </p>
                    <p class="mb-4">Passionné par les arts martiaux, j'ai su transposer les valeurs de cette discipline,
                        notamment la rigueur, la persévérance et le respect, dans ma carrière de développeur. Avec plus de
                        17 ans d'expérience en
                        <NuxtLink to="#" rel="noreferre"
                            class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                            judo
                        </NuxtLink> (ceinture noire), dont une grande partie en compétition à travers le monde, j'ai appris
                        à m'adapter rapidement à de nouvelles situations et à travailler efficacement en équipe, deux
                        compétences essentielles dans le domaine du<NuxtLink to="#" rel="noreferre"
                            class="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300">
                            développement logiciel.</NuxtLink>

                    </p>
                    <p class="mb-4">Si vous êtes à la recherche d'un développeur logiciel dévoué, créatif et toujours prêt à
                        relever de nouveaux défis, n'hésitez pas à me contacter.

                    </p>

                </div>

            </section>
            <section id="experiences" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div
                    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Expériences
                    </h2>
                </div>
                <div>
                    <PageHomeExperiencesList :experiences="experiences" />


                    <div class="mt-12">
                        <a href="/pdf/CV_Emmanuel_Narcisse.pdf"
                            class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                            target="_blank" aria-label="View Full Résumé">
                            <span>
                                <span
                                    class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                                    Voir La Totalité Du </span>
                                <span class="whitespace-nowrap">
                                    <span
                                        class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">CV</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </section>
            <section id="projects" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
                <div
                    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projets</h2>
                </div>
                <div>
                    <PageHomeProjectListPreview :projects="projects" />
                    <div class="mt-12">
                        <NuxtLink to="/PageArchive"
                            class="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group">
                            <span>
                                <span
                                    class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Voir
                                    Tous Les Projets </span>
                                <span class="whitespace-nowrap">
                                    <span
                                        class="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">Archives</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        class="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                                        aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </span>
                        </NuxtLink>
                    </div>
                </div>
            </section>
            <section id="hobbies" class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="more">
                <div
                    class="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                    <h2 class="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Hobbies</h2>
                </div>
                <div>
                    <PageHomeHobbiesList :hobbies="hobbies" />
                </div>
            </section>
            <footer class="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
                <p>Librement conçu avec
                    <NuxtLink to="https://www.figma.com/"
                        class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                        rel="noreferrer">Figma</NuxtLink>
                    et codé avec
                    <NuxtLink to="https://code.visualstudio.com/"
                        class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                        rel="noreferrer">Visual Studio Code.
                    </NuxtLink>
                    Construit avec
                    <NuxtLink to="https://nuxt.com/"
                        class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                        rel="noreferrer">Nuxt.js
                    </NuxtLink>
                    et
                    <NuxtLink to="https://tailwindcss.com/"
                        class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                        rel="noreferrer">Tailwind CSS
                    </NuxtLink>
                    déployé avec
                    <NuxtLink to="https://www.netlify.com/"
                        class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                        rel="noreferrer">Netlify.
                    </NuxtLink>
                    Application construite sous
                    <NuxtLink to="https://www.typescriptlang.org/"
                        class="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300" target="_blank"
                        rel="noreferrer">TypeScript
                    </NuxtLink>.

                </p>
            </footer>
        </main>
    </div>
</template>