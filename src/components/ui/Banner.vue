<script setup>
    import { LaAngleDoubleRightSolid } from '@kalimahapps/vue-icons';
    import { computed, reactive } from 'vue';
    import { BannerImageGrid } from '..';
	import { grid } from "../../assets";
	import { useStore } from 'vuex';

    const borderStyled = reactive({
        border: "1px solid rgba(59,130,246,.2)"
    });

	const store = useStore();

	const isThemeStatus = computed(() => store.getters.currentThemeStatus);

</script>

<template>
    <div class="w-full h-fit px-6 md:px-20 py-12 bg-slate-100 dark:bg-primary relative z-1 overflow-x-hidden">
        <div class="flex flex-col lg:flex-row gap-y-4">
            <div class="flex-1 md:flex-[0.4] flex flex-col gap-y-3">
                <div class="px-6 ring-1 ring-white/10 py-1 text-[13.5px] rounded-full w-fit flex items-center gap-x-2 dark:bg-primary dark:text-slate-100 relative">
                    <span>TECH Connect</span>
                    <LaAngleDoubleRightSolid class="text-[13px] mt-1" />
                    <span class="absolute bg-gradient-to-r from-blue-400/0 via-blue-500/90 to-blue-400/0 w-[calc(100%-2.25rem)] h-[0.9px] rounded-full bottom-0 left-[50%] -translate-x-[50%]"></span>
                </div>
                <div class="flex flex-col">
                    <div class="text-[20px] md:text-[25px] lg:text-[35px] font-[1000] dark:text-slate-100 uppercase">Expand Your</div>
                    <div class="text-[20px] md:text-[25px] lg:text-[35px] font-[1000] dark:text-slate-100 uppercase">Tech Universe</div>
                    <div class="text-[20px] md:text-[25px] lg:text-[35px] font-[1000] dark:text-slate-100 uppercase">Code, Connect & Collaborate</div>
                </div>
                <div class="text-[14px] font-[500] dark:text-slate-100">Tech Connect is the ultimate hub for developers, engineers, and tech enthusiasts to collaborate, share knowledge, and grow their networks. Whether you're looking for job opportunities, mentorship, or a place to showcase your latest project, Tech Connect brings like-minded professionals together. Stay inspired, stay connected, and power the future of technology—one connection at a time.</div>
                <div class="flex gap-x-3">
                    <router-link to="/register">
                        <button class="py-2 px-3 font-[550] cursor-grabbing text-primary dark:text-slate-100 rounded-md" :style="borderStyled">Get Started</button>
                    </router-link>
                    <router-link to="/about">
                        <button class="py-2 px-3 font-[550] cursor-grabbing text-primary dark:text-slate-100 rounded-md" :style="borderStyled">Learn More</button>
                    </router-link>
                </div>
            </div>
            <BannerImageGrid class="flex-1 md:flex-[0.6]" />
        </div>
        <div v-show="isThemeStatus" class="absolute w-[200px] h-[200px] rounded-full blur-[650px] bg-blur-color top-[50%] right-[35%] -z-1"></div>
		<img v-show="!isThemeStatus" class="absolute top-0 right-0 -translate-x-[30%] w-full h-full object-cover object-center -z-1" :src="grid" alt="grid" style="mix-blend-mode: color-burn;">
		<img v-show="!isThemeStatus" class="absolute top-0 right-0 -translate-x-[30%] w-full h-full object-cover object-center -z-1" :src="grid" alt="grid" style="mix-blend-mode: color-burn;">
    </div>
</template>