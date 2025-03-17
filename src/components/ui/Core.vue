<script setup>
    import { computed } from 'vue';
    import store from '../../store';
    import { CoreCard } from '..';

    const core_contents = computed(() => store.getters.handleCoreData);
</script>

<template>
    <div class="w-full h-fit px-6 md:px-20 py-10 bg-slate-100 dark:bg-primary relative z-1">
        <div class="flex flex-col gap-y-5">
            <div class="text-[26px] md:text-[35px] font-[1000] self-center dark:text-slate-100 text-primary">Key Features</div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
                <CoreCard v-for="(coredata, index) in core_contents" :key="index" v-bind="coredata" />
            </div>
        </div>
    </div>
</template>