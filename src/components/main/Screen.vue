<script setup>
	import { reactive } from 'vue';

	const scrollerStyle = reactive({
		scrollbarWidth: "none",
	});
</script>

<template>
	<div class="w-screen h-screen overflow-y-auto overflow-x-hidden" :style="scrollerStyle">
		<slot />
	</div>
</template>
