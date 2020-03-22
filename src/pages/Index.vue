<template>
  <Layout>

    <div class="post post-home">

      <!-- Header -->
      <header class="post-header clearfix">
        <div class="post-head-wrap">
          <div class="post-head-content">
            <h1 class="post-title">A frequently updated collection of Design System <g-link to="/design-systems" title="Design Systems">examples</g-link>, <g-link to="/articles" title="Articles">articles</g-link>, <g-link to="/tools" title="Tools">tools</g-link> and <g-link to="/talks" title="Talks">talks</g-link>.</h1>
          </div>
        </div>
      </header>

      <!-- Design Systems -->
      <section class="post-content content-ds">

        <g-link class="block title" to="/design-systems-recent" title="Design Systems Gallery">
          <div class="content">
            <g-image src="~/assets/images/illustration-ds.svg" width="94" height="86" alt="Design System Legos" />
            <h1>Latest Design Systems</h1>
            <p class="button">View all</p>
          </div>
        </g-link>

        <!-- Block -->
        <a class="block block-home" v-for="edge in $page.systems.edges" :key="edge.node.id" :href="edge.node.link" target="_blank" rel="nofollow noreferrer">
          <div class="img-wrap">
            <g-image :src="edge.node.image" width="365" :alt="edge.node.title" />
          </div>
          <div class="content">
            <h3 v-html="edge.node.company"></h3>
            <h2 v-html="edge.node.title"></h2>
          </div>
        </a>

      </section>

      <!-- Articles -->
      <section class="post-content content-articles">
        <g-link class="block title" to="/articles" title="Articles">
          <div class="content">
            <g-image src="~/assets/images/illustration-articles.svg" width="94" height="86" alt="Design System Articles" />
            <h1>Latest Articles</h1>
            <p class="button">View all</p>
          </div>
        </g-link>

        <!-- Block -->
        <g-link class="block block-home" v-for="edge in $page.articles.edges" :key="edge.node.id" :href="edge.node.link" target="_blank" rel="nofollow noreferrer">
          <div class="content">
            <h3 v-html="edge.node.author"></h3>
            <h2 v-html="edge.node.title"></h2>
            <span class="date">{{ edge.node.date }}</span>
          </div>
        </g-link>

      </section>

      <div class="home-secondary-wrap">
        <div class="home-secondary">

          <!-- Secondary Tile -->
          <g-link class="secondary-tile" to="/tools" title="Tools on Design Systems">
            <div class="secondary-tile-img">
              <g-image immediate="true" src="~/assets/images/icon-tools.svg" width="24" height="24" alt="Tools" />
            </div>
            <div class="secondary-content">
              <h2>Tools <span>&rarr;</span></h2>
              <p>A growing collection of design system tools, resources, and plugins.</p>
            </div>
          </g-link>

          <!-- Secondary Tile -->
          <g-link class="secondary-tile" to="/books" title="Books on Design Systems">
            <div class="secondary-tile-img">
              <g-image immediate="true" src="~/assets/images/icon-books.svg" width="24" height="24" alt="Books" />
            </div>
            <div class="secondary-content">
              <h2>Books <span>&rarr;</span></h2>
              <p>A list of recommended books on the subject of design systems from industry experts.</p>
            </div>
          </g-link>

          <!-- Secondary Tile -->
          <g-link class="secondary-tile" to="/talks" title="Talks on Design Systems">
            <div class="secondary-tile-img">
              <g-image immediate="true" src="~/assets/images/icon-talks.svg" width="24" height="24" alt="Books" />
            </div>
            <div class="secondary-content">
              <h2>Talks <span>&rarr;</span></h2>
              <p>Helpful talks and presentations on tools and process regarding design systems.</p>
            </div>
          </g-link>

        </div>
      </div>

    </div>

  </Layout>
</template>

<page-query>
query Systems {
	systems: allSystems(perPage: 3) {
    edges {
      node {
        id
        company
        title
        description
        image
        link
      }
    }
  }
	articles: allArticles(perPage: 3) {
    edges {
      node {
        id
        title
        description
        author
        date (format: "MMMM D, Y")
        link
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'home',
  metaInfo: {
    title: 'Design Systems Repo | A Collection of Design System Resources',
    meta: [
      { name: 'description', content: 'An organized and frequently updated collection of Design System examples, resources, tools, articles and videos.' }
    ],
  }
}
</script>
