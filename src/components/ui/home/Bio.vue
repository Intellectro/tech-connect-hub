<script setup>
	import { inject } from "vue";
	import {grid, Hexagon, laptopConnect} from "../../../assets";
	import { useStore } from "vuex";
import { computed } from "vue";

	const imageExtractor = inject('image-name-extractor');
	const store = useStore();

	const isThemeStatus = computed(() => store.getters.currentThemeStatus);
</script>

<template>
    <div class="w-full px-6 py-12 md:px-20 bg-slate-100 dark:bg-primary relative z-1">
		<div class="flex flex-col gap-y-4">
            <div class="text-[26px] md:text-[35px] font-[1000] self-center dark:text-slate-100 text-primary">About TECHCONNECT</div>
			<div class="flex flex-col md:flex-row gap-x-5 gap-y-3">
				<div class="flex-1 md:flex-[0.45] w-full">
					<div class="w-full px-3 py-3">
						<img class="object-contain aspect-video object-center" :src="laptopConnect" :alt="imageExtractor(laptopConnect)">
					</div>
				</div>
				<div class="flex-1 md:flex-[0.55] w-full">
					<div class="flex flex-col gap-y-4">
						<div class="flex flex-col gap-y-3">
							<div class="text-[13.5px] md:text-[15px] font-[550] text-primary dark:text-slate-100">At Tech Connect, we believe that the future of technology thrives on collaboration, innovation, and meaningful connections. Our platform is designed to bring together <strong>developers</strong>, <strong>tech enthusiasts</strong>, and <strong>industry leaders</strong> in a dynamic digital space where ideas can flourish.</div>
							<div class="text-[13.5px] md:text-[15px] font-[550] text-primary dark:text-slate-100">Whether you're looking to <strong>network with like-minded professionals, find career opportunities, collaborate on projects, or stay updated with the latest trends in tech</strong>, Tech Connect is your go-to hub.</div>
							<div class="text-[13.5px] md:text-[15px] font-[550] text-primary dark:text-slate-100">We are committed to empowering the global tech community by providing a seamless and engaging platform for knowledge-sharing, mentorship, and professional growth. Join us in shaping the future of technology—one connection at a time.</div>
						</div>
						<router-link to="about" class="self-start">
							<div class="border border-blur-color rounded-md py-2 px-4 dark:text-slate-100 text-primary uppercase text-[14.5px]">Learn More</div>
						</router-link>
					</div>
				</div>
			</div>
		</div>
		<img v-show="!isThemeStatus" class="absolute top-0 right-0 w-full h-full object-cover object-center -z-1" style="mix-blend-mode: color-burn;" :src="grid" alt="grid">
		<img v-show="!isThemeStatus" class="absolute top-0 right-0 w-full h-full object-cover object-center -z-1" style="mix-blend-mode: color-burn;" :src="grid" alt="grid">
		<div v-show="isThemeStatus" class="absolute w-[200px] h-[200px] rounded-full blur-[650px] bg-blur-color top-[50%] left-[25%] -z-1"></div>
		<div v-show="isThemeStatus" class="absolute w-[200px] h-[200px] rounded-full blur-[650px] bg-blur-color top-[20%] left-[5%] -z-1"></div>
    </div>
</template>

<!--  -->