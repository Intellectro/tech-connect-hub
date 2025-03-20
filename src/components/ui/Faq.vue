<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import FaqContent from './FaqContent.vue';

	const store = useStore();

	const faqcontents = computed(() => store.getters.faqContentsHandler);
	const isThemeStatus = computed(() => store.getters.currentThemeStatus);

</script>

<template>
	<div class="w-full px-6 py-12 md:px-20 bg-slate-100 dark:bg-primary relative z-1">
		<div class="w-full md:w-[50%] mx-auto">
			<div class="flex flex-col gap-y-4">
				<div class="text-center text-[25px] font-[550] dark:text-slate-100 text-primary">Frequently Asked Questions</div>
				<div class="flex flex-col gap-y-2">
					<FaqContent v-for="(contents, index) in faqcontents" :key="index" v-bind="contents" />
				</div>
			</div>
		</div>
		<div v-show="isThemeStatus" class="absolute w-[200px] h-[200px] rounded-full blur-[650px] bg-blur-color top-[10%] right-[5%] -z-1"></div>
		<div v-show="isThemeStatus" class="absolute w-[200px] h-[200px] rounded-full blur-[650px] bg-blur-color bottom-[10%] left-[5%] -z-1"></div>
	</div>
</template>