<template>
  <div class="contact-wrapper">
    <div class="contact">
      you can reach me on
      <a href="tel:+0201119447500" class="underlined">phone</a> or via
      <a href="mailto:omareloui@hotmail.com" class="underlined">email</a> for
      now.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contact-wrapper {
  padding: 0 12vw;

  .contact {
    background: #14141433;
    backdrop-filter: blur(2px);
    border-radius: 20px;
    padding: 2rem 3rem;
    margin: auto;

    width: fit-content;

    font-size: clamp(20px, 6vw, 25px);
    font-weight: 700;
    text-align: center;
  }
}
</style>
