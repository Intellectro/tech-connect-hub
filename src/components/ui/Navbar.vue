<script setup>
    import { techLight, techDark } from "../../assets";
    import { computed, onBeforeMount, onMounted, onUpdated, reactive, ref, watch } from "vue";
    import { CgMenuRightAlt, CaLightFilled, BsMoonStarsFill } from '@kalimahapps/vue-icons';
	import { inject } from "vue";
	import { useStore } from "vuex";
	import { onUnmounted } from "vue";

	const store = useStore();

    const routesData = computed(() => store.getters.routesDataHandler);
    const theme = ref({
        isDarkMode: localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : false,
        themeIsOpen: false
    });

    const borderStyled = reactive({
        borderBottom: "1px solid rgba(59,130,246,.2)"
    });

	const systemThemeHandler = ref(window.matchMedia("(prefers-color-scheme: dark)"));

    const themeToggle = (e) => {
        const themeSelector = e.currentTarget.dataset.themeValue;
        switch(themeSelector) {
            case "dark":
                theme.value.isDarkMode = true;
                break;
            case "light":
                theme.value.isDarkMode = false;
                break;
            case "system":
                const systemThemeDefault = window.matchMedia("(prefers-color-scheme: dark)");
                theme.value.isDarkMode = systemThemeDefault.matches;
                break;
            default:
                // i'll include alert here maka ndi hacker
                return;
            }
        localStorage.setItem("theme", JSON.stringify(theme.value.isDarkMode));
        theme.value.themeIsOpen = false;
		store.dispatch("isThemeStatusHandler", theme.value.isDarkMode);
    }

    const toggleOpenThemeController = () => {
        theme.value.themeIsOpen = !theme.value.themeIsOpen;
    }

    const detectDefaultTheme = () => {
        document.documentElement.className = theme.value.isDarkMode ? 'dark' : '';
    }

	const systemTController = (e) => {
			theme.value.isDarkMode = e.matches;
			localStorage.setItem("theme", JSON.stringify(e.matches));
		}

	const imageExtractor = inject('image-name-extractor');

    watch(() => theme.value.isDarkMode, (newValue) => {
        document.documentElement.className = newValue ? 'dark' : '';
		store.dispatch("isThemeStatusHandler", newValue);
    });

    onMounted(() => {
        detectDefaultTheme();

		systemThemeHandler.value.addEventListener("change", systemTController);
    });

	onUnmounted(() => {
		systemThemeHandler.value.removeEventListener("change", systemTController);
	});

	onBeforeMount(() => {
		store.dispatch("isThemeStatusHandler", localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : theme.value.isDarkMode);
		document.documentElement.className = localStorage.getItem('theme') ? (JSON.parse(localStorage.getItem("theme")) ? 'dark' : '') : '';
	});

	const themeStatus = computed(() => store.getters.currentThemeStatus);

	onUpdated(() => {
		if (localStorage.getItem("theme")) {
			document.documentElement.className = JSON.parse(localStorage.getItem("theme")) ? 'dark' : '';
		}
	});

</script>

<template>
    <div class="w-full relative bg-slate-100 px-6 py-4 md:px-14 shadow-md dark:bg-primary" :style="borderStyled">
        <div class="w-full flex items-center justify-between">
            <div class="w-[95%] h-[25px] md:w-[60%] md:h-[30px]">
                <img v-if="!themeStatus" class="w-full h-full object-contain object-left" :src="techLight" :alt="imageExtractor(techLight)">
                <img v-if="themeStatus" class="w-full h-full object-contain object-left" :src="techDark" :alt="imageExtractor(techDark)">
            </div>
            <div class="flex items-center gap-x-8">
                <div class="hidden md:flex items-center gap-x-5">
                    <router-link v-for="(route, index) in routesData" :to="{name: route._name}" :key="index">
                        <span class="text-[14.5px] font-[550] capitalize dark:text-slate-100">{{route._name}}</span>
                    </router-link>
                </div>
                <div class="flex md:hidden w-[30px] h-[30px] rounded-sm justify-center items-center shadow-md dark:shadow-[0px_0px_4px_rgba(255,255,255,0.3)] dark:text-slate-100">
                    <CgMenuRightAlt />
                </div>
                <div class="w-[30px] h-[30px] rounded-sm flex justify-center items-center shadow-md dark:shadow-[0px_0px_4px_rgba(255,255,255,0.3)] dark:text-slate-100" @click="toggleOpenThemeController">
                    <CaLightFilled v-show="!themeStatus" />
                    <BsMoonStarsFill v-show="themeStatus" />
                </div>
            </div>
        </div>
        <div v-show="theme.themeIsOpen" :class="['absolute flex flex-col py-2 shadow-md rounded-md right-0 z-9 bg-slate-100 dark:bg-primary dark:text-slate-100', ` ${theme.themeIsOpen ? 'translate-x-0' : 'translate-x-60'} transition-all duration-75 ease-linear`]">
            <div @click="(e) => themeToggle(e)" class="cursor-pointer py-1 px-3 border-b border-b-black hover:bg-black/50 hover:text-slate-100" data-theme-value="dark">Dark Mode</div>
            <div @click="(e) => themeToggle(e)" class="cursor-pointer py-1 px-3 border-b border-b-black hover:bg-black/50 hover:text-slate-100" data-theme-value="light">Light Mode</div>
            <div @click="(e) => themeToggle(e)" class="cursor-pointer py-1 px-3 border-b border-b-black hover:bg-black/50 hover:text-slate-100" data-theme-value="system">System Default</div>
        </div>
    </div>
</template>