<script setup lang="ts">
const { width } = withDefaults(defineProps<{ width?: string }>(), {
  width: "285px",
});
</script>

<template>
  <div class="mobile-mockup">
    <div class="screen-outline">
      <div class="medial-stripes">
        <div class="medial-stripes__stripe medial-stripes__stripe--top"></div>
        <div
          class="medial-stripes__stripe medial-stripes__stripe--bottom"
        ></div>
        <div
          class="
            medial-stripes__stripe
            medial-stripes__stripe--right
            medial-stripes__stripe--right-1
          "
        ></div>
        <div
          class="
            medial-stripes__stripe
            medial-stripes__stripe--right
            medial-stripes__stripe--right-2
          "
        ></div>
        <div
          class="
            medial-stripes__stripe
            medial-stripes__stripe--left
            medial-stripes__stripe--left-1
          "
        ></div>
        <div
          class="
            medial-stripes__stripe
            medial-stripes__stripe--left
            medial-stripes__stripe--left-2
          "
        ></div>
      </div>
      <div class="side-buttons">
        <div class="side-buttons__button side-buttons__button--right"></div>
        <div
          class="
            side-buttons__button
            side-buttons__button--left
            side-buttons__button--left-1
          "
        ></div>
        <div
          class="
            side-buttons__button
            side-buttons__button--left
            side-buttons__button--left-2
          "
        ></div>
        <div
          class="
            side-buttons__button
            side-buttons__button--left
            side-buttons__button--left-3
          "
        ></div>
      </div>
    </div>

    <div class="screen">
      <div class="screen__body">
        <div class="image" style="background: ivory; height: 100%"></div>
      </div>

      <div class="screen__sensors">
        <div class="camera">
          <div class="camera__outer"></div>
          <div class="camera__inner"></div>
        </div>
        <div class="speaker">
          <div class="speaker__border"></div>
          <div class="speaker__inside"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "~~/assets/styles/mixins" as *;

.mobile-mockup {
  position: relative;
  // @include size(285px, 578.91px);
  // @include ratio-size(285px, 1/2.032);
  @include ratio-size(v-bind(width), 1/2.032);
  // max-width: 100%;

  // TODO: to remove after creation
  // margin: 20px auto;
  // background: #ccc;
  // &,
  // * {
  //   outline: red 0.1px solid;
  // }

  .screen {
    @include center;
    // @include size(272px, 564.62px);
    // @include ratio-size(272px, 1/2.0782);
    @include ratio-size(95.44%, 1/2.0782);

    background: #000000;
    border-radius: 13.97% / 6.73%;

    &__body {
      // @include size(251px, 542.83px);
      // @include ratio-size(251px, 1/2.17);
      @include ratio-size(92.276%, 1/2.17);

      @include center;
      overflow: hidden;
      border-radius: 10.358% / 4.793%;
    }

    &__sensors {
      @include center-h;
      // @include size(136px, 31px);
      // @include ratio-size(136px, 1/0.228);
      @include ratio-size(50%, 1/0.228);

      background: #000000;
      border-radius: 0 0 8.823% 8.823% / 0 0 38.709% 38.709%;

      .speaker {
        // @include size(30.35px, 5.45px);
        // @include ratio-size(30.35px, 1/0.1795);
        @include ratio-size(22.316%, 1/0.1795);

        position: absolute;
        left: 50%;
        top: 50% + 5%;
        transform: translate(-50%, -50%);

        > div {
          border-radius: 9999px;
        }

        &__inside {
          position: absolute;
          @include size(100%);

          box-shadow: inset 0px 0px 8px rgba(0, 0, 0, 0.48);
        }

        &__border {
          // --border-width: 1px;
          --border-width: 3.3%; // FIXME: won't work with "border" property some places;

          position: absolute;
          @include size(100%);

          background: #161616;
          background-clip: padding-box;
          border: solid var(--border-width) transparent;

          &:before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: -1;
            margin: calc(var(--border-width) * -1);
            border-radius: inherit;
            background: linear-gradient(
              #000000 0%,
              #484848 48.3%,
              #000000 100%
            );
          }
        }
      }

      .camera {
        // @include size(10.9px);
        @include ratio-size(8%, 1);

        position: absolute;
        top: 50% + 5%;
        right: 25.73%;
        transform: translateY(-50%);

        > * {
          border-radius: 50%;
        }

        &__outer {
          @include size(100%);

          background: radial-gradient(
              50% 50% at 50% 50%,
              rgba(0, 0, 0, 0.25) 46.35%,
              rgba(0, 0, 0, 0) 64.58%
            ),
            radial-gradient(
              39.29% 39.29% at 58.93% 73.21%,
              #242424 0%,
              #161616 100%
            );
        }

        &__inner {
          @include center;
          @include size(50%);

          background: radial-gradient(
              50% 50% at 50% 50%,
              rgba(0, 0, 0, 0) 82.81%,
              rgba(0, 0, 0, 0.85) 100%
            ),
            radial-gradient(
              17.86% 17.86% at 64.29% 39.29%,
              #6356d7 0%,
              rgba(21, 54, 138, 0) 100%
            ),
            radial-gradient(
              35.71% 35.71% at 57.14% 57.14%,
              #070d17 14.68%,
              rgba(7, 13, 23, 0) 100%
            ),
            radial-gradient(
              46.43% 46.43% at 10.71% 39.29%,
              #070d17 0%,
              rgba(7, 13, 23, 0) 100%
            ),
            linear-gradient(
              180deg,
              #0b528d 0%,
              #3625af 27.6%,
              #070d17 51.04%,
              #16618f 73.44%,
              #021762 100%
            );
        }
      }
    }
  }

  .screen-outline {
    // --border-width: 2px;
    --border-width: 0.71882%; // FIXME: won't work with "border" property

    @include center;

    // @include size(
    //   calc(278.23px + var(--border-width)),
    //   calc(570.58px + var(--border-width))
    // );
    // @include ratio-size(calc(278.23px + var(--border-width)), 1/2.05);
    @include ratio-size(calc(96.92% + var(--border-width)), 1/2.05);

    // border-radius: 40px;
    border-radius: 14.376% / 7.01%;

    background: #050505;
    box-shadow: inset 0px 0px 5px #000000,
      inset 0px 0px 10px rgba(255, 255, 255, 0.88);

    background-clip: padding-box;
    border: solid var(--border-width) transparent;

    &:before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      margin: calc(var(--border-width) * -1);
      border-radius: inherit;
      background: linear-gradient(180deg, #ffffffa3 0%, #ffffff52 100%);
    }

    > div {
      width: 0;
    }

    .medial-stripes {
      // parent: 278.27px, 569.58px

      &__stripe {
        position: absolute;
        // @include size(6.62px, 5.45px);
        @include ratio-size(2.3789%, 1/0.8232);

        background: linear-gradient(
          90deg,
          #8f8f8f 42.01%,
          #525252 61.04%,
          #141414 97.63%
        );

        &--top {
          // right: 60px;
          // top: -4px;
          right: 21.562%;
          top: -0.6%;

          transform: rotate(90deg);
        }

        &--bottom {
          // left: 50px;
          // bottom: -4px;
          left: 17.97%;
          bottom: -0.6%;

          transform: rotate(270deg);
        }

        @each $side in right left {
          &--#{$side} {
            // #{$side}: -4.4px;
            #{$side}: -1%;

            @if $side == right {
              transform: rotate(180deg);
            }

            &-1 {
              // top: 48px;
              top: 8.43%;
            }

            &-2 {
              // bottom: 48px;
              bottom: 8.43%;
            }
          }
        }
      }
    }

    .side-buttons {
      // parent: 278.27px, 569.58px

      &__button {
        position: absolute;

        // width: 2px;
        width: 0.72%;

        background: #353432;

        @each $side in right left {
          &--#{$side} {
            // #{$side}: calc(-2.3px - var(--border-width));
            #{$side}: calc(-0.75% - var(--border-width));
          }
        }

        &--left {
          // border-radius: 0.8px 0px 0px 0.8px;

          &-1 {
            // top: 90px;
            top: 15.8%;

            // height: 23px;
            height: 4%;

            border-radius: 40% 0 0 40% / 3.5% 0 0 3.5%;
          }

          &-2 {
            // top: 131px;
            top: 23%;

            // height: 43px;
            height: 7.5%;

            border-radius: 40% 0 0 40% / 1.8% 0 0 1.8%;
          }

          &-3 {
            // top: 184px;
            top: 32.3%;

            // height: 43px;
            height: 7.5%;

            border-radius: 40% 0 0 40% / 1.8% 0 0 1.8%;
          }
        }

        &--right {
          // border-radius: 0px 0.8px 0.8px 0px;
          border-radius: 0 40% 40% 0 / 0 1.17% 1.17% 0;

          // top: 146px;
          top: 25.63%;

          // height: 68px;
          height: 11.939%;
        }
      }
    }
  }
}
</style>
