<script setup>
	import { onMounted, useTemplateRef, reactive, ref, provide, computed } from 'vue';

	const scrollerRef = useTemplateRef("scroller");
	const limitReached = ref(false);

	const handlePageScroll = (e) => {
		const _pageYoffset = e.currentTarget.scrollTop;
		if (_pageYoffset >= 155) {
			limitReached.value = true;
			return;
		}
		limitReached.value = false;
	}

	const isLimit = computed(() => limitReached.value);

	provide("l-reached", isLimit);

	onMounted(() => {
		scrollerRef.value.addEventListener("scroll", handlePageScroll);
	});

	const scrollerStyle = reactive({
		scrollbarWidth: "none",
	});
</script>

<template>
	<div ref="scroller" class="w-screen h-screen overflow-y-auto overflow-x-hidden" :style="scrollerStyle">
		<slot />
	</div>
</template>
