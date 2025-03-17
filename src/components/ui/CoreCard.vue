<script setup>
    import { reactive } from 'vue';

    defineProps({
        id: {
            type: Number,
            default: 0
        },
        _icon: {
            type: String,
            default: ""
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

    const borderStyled = reactive({
        border: "1px solid rgba(59,130,246,.15)"
    });
</script>

<template>
    <div class="w-full py-3 px-5 relative z-1" :style="borderStyled">
        <div class="flex flex-col gap-y-3">
            <div class="text-[14px] self-center dark:bg-gradient-to-r from-[#0C0E23] to-[#050112] shadow-md -mr-2 mb-4 w-[30px] h-[30px] flex justify-center items-center rounded-full" v-html="_icon"></div>
            <div class="flex flex-col gap-y-1">
                <div class="text-[15px] text-center font-[600] dark:text-slate-100 text-primary">{{_title}}</div>
                <div class="text-center text-[13.5px] font-[450] dark:text-slate-100 text-primary">{{_content}}</div>
            </div>
        </div>
        <span class="absolute bg-gradient-to-r from-blue-400/0 via-blue-500/90 to-blue-400/0 w-[calc(100%-2.25rem)] h-[0.9px] rounded-full bottom-0 left-[50%] -translate-x-[50%]"></span>
        <span class="absolute bg-gradient-to-r from-blue-400/0 via-blue-500/90 to-blue-400/0 w-[calc(100%-2.25rem)] h-[0.9px] rounded-full top-0 left-[50%] -translate-x-[50%]"></span>
    </div>
</template>