<template>
  <div class="flavours">
    <h1>This is the flavours page</h1>
    {{ $route.params.brew }} <!-- //TODO Need to save this value to the $store with 'currentBrew' or something as the key maybe? Then create a 'getBrew' method that we can pass this ID into and it gets the brew from the brews array -->
  </div>
</template>