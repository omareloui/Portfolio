<script lang="ts" setup>
useMeta({
  title: "Omar Eloui | Web developer",
});
</script>

<template>
  <div>
    <h1>🚧 Work in progress</h1>

    <article>
      <p>
        This portfolio belongs to Omar Eloui. It's currently under development.
      </p>
      <p>
        You can reach the author on
        <a href="tel:+0201119447500">phone</a> or
        <a href="mailto:omareloui@hotmail.com">email</a>.
      </p>
    </article>
  </div>
</template>

<style lang="scss">
:root {
  --clr-link: #5079eb;
  --fnt-main: "IBM Plex Sans", sans-serif;
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--fnt-main);

  min-height: 100vh;
  text-align: center;
  padding: 20vh 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  overflow: hidden;
}

article {
  font-size: 20px;
}

a {
  color: var(--clr-link);
  text-decoration: none;
}
</style>
