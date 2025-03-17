<script setup>
  import { Screen, Scroller, Container } from "./components";
</script>

<template>
    <Screen>
      <Scroller>
        <Container>
          <router-view></router-view>
        </Container>
      </Scroller>
    </Screen>
</template>