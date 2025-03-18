<script setup>
    import { computed } from 'vue';
    import { CoreCard } from '..';
	import { useStore } from 'vuex';

	const store = useStore();

    const core_contents = computed(() => store.getters.handleCoreData);

	const isThemeStatus = computed(() => store.getters.currentThemeStatus);
</script>

<template>
    <div class="w-full h-fit px-6 md:px-20 py-10 bg-slate-100 dark:bg-primary relative z-1">
        <div class="flex flex-col gap-y-5">
            <div class="text-[26px] md:text-[35px] font-[1000] self-center dark:text-slate-100 text-primary">Key Features</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                <CoreCard v-for="(coredata, index) in core_contents" :key="index" v-bind="coredata" />
            </div>
        </div>
        <span class="absolute top-2/4 left-[50%] -translate-x-[50%] w-[30%] h-[20%] rounded-full bg-blur-color -z-1 blur-[350px]"></span>
        <span class="absolute top-0 left-[50%] -translate-x-[50%] w-[30%] h-[20%] rounded-full bg-blur-color -z-1 blur-[350px]"></span>
    </div>
</template>