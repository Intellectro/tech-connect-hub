<script setup>
	import { PhDuotoneQuestion } from '@kalimahapps/vue-icons';
	import { BsCaretRight } from '@kalimahapps/vue-icons';
	import { ref, useTemplateRef } from 'vue';

	defineProps({
		id: {
			type: Number,
			default: 0
		},
		_title: {
			type: String,
			default: ""
		},
		_content: {
			type: String,
			default: ""
		}
	});

	const isEligible = ref(false);

	const currentRef = useTemplateRef("auto-height-ref");

	const toggleHeightHandler = () => {
		const _heightDonor = currentRef.value;
		const _heightDonorId = _heightDonor.id;
		const _height = _heightDonor.offsetHeight;
		const _parentDiv = _heightDonor.parentElement;
		const _parentDivHeight = _parentDiv.offsetHeight;

		if (_parentDivHeight <= 5) {
			_parentDiv.style.setProperty("height", _height + (+_heightDonorId === 4 ? 20 : 0) + "px");
			isEligible.value = true;
			return;
		}
		_parentDiv.style.setProperty("height", 0);
		isEligible.value = false;
	}

</script>

<template>
	<div class="h-fit w-full" @click="toggleHeightHandler">
		<div class="w-full px-3 flex flex-col gap-y-1">
			<div class="w-full py-2 flex justify-between items-center">
				<div class="flex gap-x-2 items-center dark:text-slate-100 text-primary text-[15px] font-[550]">
					<PhDuotoneQuestion />
					<span>{{_title}}</span>
				</div>
				<BsCaretRight :class="[`text-slate-100 transition-all duration-500 ease-linear`, isEligible ? 'rotate-90' : 'rotate-0']" />
			</div>
			<div class="h-0 overflow-y-auto w-full transition-all duration-300 ease-linear" style="scrollbar-width: none;">
				<div class="h-auto" ref="auto-height-ref" :id="id">
					<div class="text-[13.5px] font-[500] dark:text-slate-100 text-primary">{{ _content }}</div>
				</div>
			</div>
		</div>
	</div>
</template>