<template>
  <div class="layout">

    <!-- Header -->
    <header class="site-header" role="banner">

      <div class="wrapper">

        <div class="header-inner">
          <g-link class="site-title" rel="author" to="/" title="Design Systems Repo">
            <g-image class="logo-lg" src="~/assets/images/dsr-logo.svg" alt="Design Systems Repo" width="98"
              height="98" immediate="true" />
            <g-image class="logo-sm" src="~/assets/images/dsr-logo-small.svg" alt="Design Systems Repo" width="143"
              height="36" immediate="true" />
          </g-link>

          <button id="nav" v-on:click="navHidden = !navHidden, close = !close" class="pull lines-button" v-bind:class="{ close }" type="button" role="button" aria-label="Toggle Navigation">
            <span class="lines"></span>
          </button>
        </div>
        <nav class="responsive-nav">
          <transition name="fade">
          <ul class="nav" v-bind:class="{ navHidden }">
            <li>
              <g-link to="/design-systems" exact-active-class="ds-active" title="Design Systems Gallery">Design Systems</g-link>
            </li>
            <li>
              <g-link to="/articles" exact-active-class="ds-active" title="Articles">Articles</g-link>
            </li>
            <li>
              <g-link to="/tools" exact-active-class="ds-active" title="Tools">Tools</g-link>
            </li>
            <li>
              <g-link to="/books" exact-active-class="ds-active" title="Books">Books</g-link>
            </li>
            <li>
              <g-link to="/talks" exact-active-class="ds-active" title="Talks">Talks</g-link>
            </li>
            <li>
              <g-link to="/about" exact-active-class="ds-active" title="About">About</g-link>
            </li>
            <li><a class="submit" href="https://jad8.typeform.com/to/XnIDFZ" target="_blank" rel="noopener noreferrer"
                title="Submit a Resource"><span>Submit</span><svg xmlns="http://www.w3.org/2000/svg" width="24"
                  height="24" viewBox="0 0 24 24">
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="12" cy="12" r="12" fill="#73FFE1" />
                    <polygon fill="#000" fill-rule="nonzero"
                      points="13 6 11 6 11 11 6 11 6 13 11 13 11 18 13 18 13 13 18 13 18 11 13 11" />
                  </g>
                </svg></a></li>
          </ul>
          </transition>
        </nav>
      </div>

    </header>

    <transition name="fade" appear>
    <slot />
    </transition>

    <!-- Footer -->
    <footer class="footer-wrap">
      <span class="footer-border"></span>
      <div class="footer">
        <span>Made with 💜 by Jad Limcaco.</span>
        <span class="coffee"><a target="_blank" href="https://cash.me/$jad/5" rel="noopener noreferrer">Buy me a coffee</a> ☕️</span>
      </div>
    </footer>

  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  data: function () {
    return {
    navHidden: true,
    close: false
    }
  }
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>