<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import { CoBrandCodeigniter } from '@kalimahapps/vue-icons';

	const store = useStore();
	const features = computed(() => store.getters.featuresData);

	const isThemeStatus = computed(() => store.getters.currentThemeStatus);
</script>

<template>
	    <div class="w-full h-fit px-6 md:px-20 py-10 bg-slate-100 dark:bg-primary relative z-1">
			<div class="flex flex-col gap-y-4">
				<div class="text-[26px] md:text-[35px] font-[1000] self-center dark:text-slate-100 text-primary">Discover TECH-CONNECT Features</div>
				<div class="flex flex-col md:flex-row gap-x-6 gap-y-3">
					<div class="flex-1 md:flex-[0.55] w-full">
						<div class="flex flex-col gap-y-4">
							<div class="text-[14.5px] font-[650] dark:text-slate-100 text-primary">Explore TECH-CONNECT in action! Our walkthrough highlights the main features and functionalities, helping you get the most out of the platform.</div>
							<div class="flex flex-col gap-y-2">
								<div v-for="({id, _feature}) in features" :key="id" class="flex items-center gap-x-2 text-primary font-[550] text-[12px] md:text-[12.5px] uppercase dark:text-slate-100">
									<CoBrandCodeigniter />
									<span>{{_feature}}</span>
								</div>
							</div>
							<router-link to="/about" class="self-start">
								<button class="py-2 px-4 font-[550] dark:text-slate-100 text-primary border border-blur-color">Explore More Features</button>
							</router-link>
						</div>
					</div>
					<div class="flex-1 md:flex-[0.45] w-full">
						<img class="w-full h-full object-contain object-center" src="../../../assets/images/sideimg.jpg" alt="sideimage">
					</div>
				</div>
			</div>
			<div v-show="isThemeStatus" class="absolute w-[200px] h-[200px] rounded-full blur-[650px] bg-blur-color top-[50%] left-[15%] -z-1"></div>
			<div v-show="isThemeStatus" class="absolute w-[200px] h-[200px] rounded-full blur-[650px] bg-blur-color top-[50%] left-[45%] -z-1"></div>
		</div>
</template>