<script setup>
  	import { provide } from "vue";
	import { Screen, Scroller, Container } from "./components";

	import SlideInNav from "./components/main/SlideInNav.vue";

  	const imageNameExtractor = (image) => {
	return image.split('/').pop().split('.')[0]
  };

  provide("image-name-extractor", imageNameExtractor);
</script>

<template>
    <Screen>
      <Scroller>
        <Container>
			<SlideInNav />
          <router-view></router-view>
        </Container>
      </Scroller>
    </Screen>
</template>