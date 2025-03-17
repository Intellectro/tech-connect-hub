<script setup>
    import { onUnmounted, ref, onMounted } from "vue";
    import {reactimg, vueimg, astroimg, nextimg, nuxtimg, expressimg, laravelimg, ionicimg} from "../../assets";

    defineOptions({
        inheritAttrs: false,
    });

    const imageHolders = ref([reactimg, vueimg, astroimg, nextimg, nuxtimg, expressimg, laravelimg, ionicimg]);

    const mediaHandler = ref({
        isPhoneView: false
    });

    const handleMedia = () => {
        const _media_ = window.matchMedia("(max-width: 990px)");
        if (_media_.matches) {
            mediaHandler.value.isPhoneView = _media_.matches;
            return;
        }
        mediaHandler.value.isPhoneView = _media_.matches;
    }

    const extractImageName = (img) => {
        return img.split('/').pop().split(".")[0]
    }

    onMounted(() => {
        handleMedia();
        window.addEventListener("resize", () => handleMedia());
    });

    onUnmounted(() => {
        window.removeEventListener("resize", () => handleMedia());
    });
</script>

<template>
    <div :class="[$attrs.class, ' w-full']">
        <div class="gallery relative -top-[10%] lg:top-0" v-if="!mediaHandler.isPhoneView">
            <img v-for="(image, index) in imageHolders" :key="index" :src="image" :alt="image.split('/').pop().split('.')[0]">
        </div>
        <div v-if="mediaHandler.isPhoneView" class="w-full grid grid-cols-3 gap-1">
            <img class="h-[120px] w-full object-contain object-center bg-primary dark:bg-slate-100 brightness-50 hover:brightness-100 rounded-md aspect-[1] col-span-2" :src="reactimg" :alt="extractImageName(reactimg)">
            <img class="h-[120px] w-full object-contain object-center bg-primary dark:bg-slate-100 brightness-50 hover:brightness-100 rounded-md" :src="vueimg" :alt="extractImageName(vueimg)">
            <img class="h-[120px] w-full object-contain object-center bg-primary dark:bg-slate-100 brightness-50 hover:brightness-100 rounded-md" :src="astroimg" :alt="extractImageName(astroimg)">
            <img class="h-[120px] w-full object-contain object-center bg-primary dark:bg-slate-100 brightness-50 hover:brightness-100 rounded-md aspect-[1]  col-span-2" :src="nextimg" :alt="extractImageName(nextimg)">
            <img class="h-[120px] w-full object-contain object-center bg-primary dark:bg-slate-100 brightness-50 hover:brightness-100 rounded-md aspect-[1]  col-span-2" :src="nuxtimg" :alt="extractImageName(nuxtimg)">
            <img class="h-[120px] w-full object-contain object-center bg-primary dark:bg-slate-100 brightness-50 hover:brightness-100 rounded-md" :src="expressimg" :alt="extractImageName(expressimg)">
        </div>
    </div>
</template>


<style scoped lang="scss">
    img {
     max-width: 100%;
    }

    .gallery {
        --img-size: calc(100px - 0.5rem / 2);
        display: grid;
        gap: 0.5rem;
        grid-template-columns: repeat(6, var(--img-size));
        grid-template-rows: repeat(3, var(--img-size));
        justify-content: center;
    }

    .gallery img {
        aspect-ratio: 1;
        object-fit: cover;
        height: 200px;
        grid-column: span 2;
        border-radius: 2vmax;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        transition: filter 500ms, clip-path 500ms;

        &:nth-of-type(4) {
            grid-area: 2 / 2 / span 1 / span 2;
        }

        &:hover {
            z-index: 100;
            clip-path: polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%);
        }

        &:not(:hover) {
            animation: zIndexHack 500ms;
        }
    }

    .gallery:hover > img {
        filter: brightness(0.5) saturate(0.5);
    }

    .gallery > img:hover {
        filter: brightness(1) saturate(1.5);
    }

    @media screen and (max-width: 650px) {
        .gallery img {
            height: auto;
        }
    }
</style>