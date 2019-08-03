<template>
  <Layout>
    <article class="post post-tools">

      <header class="post-header clearfix">
        <div class="post-head-wrap">
          <div class="post-head-content">
            <h1 class="post-title">Tools and Resources</h1>
            <p>An ever growing list of design and development tools and plugins to help you build, maintain, and organize your own design system.</p>
          </div>
          <g-image immediate="true" class="illustration" src="~/assets/images/illustration-tools.svg" width="94" height="86" alt="Design System Tools" />
        </div>
      </header>

      <!-- Tags -->
      <!-- <ul class="filter">
        <li><a href="/tools/">All <span class="number"></span></a></li>
        <li><a href="/tools/design/">Design</a></li>
        <li><a href="/tools/development/">Development</a></li>
        <li><a href="/tools/documentation/">Documentation</a></li>
        <li><a href="/tools/frameworks/">Frameworks</a></li>
        <li><a href="/tools/sketch/">Sketch</a></li>
      </ul> -->

      <div class="post-content">

        <!-- Block -->
        <a class="block block-books" v-for="edge in $page.posts.edges" :key="edge.node.id" :href="edge.node.link" target="_blank" rel="nofollow noreferrer">
          <div class="img-wrap">
            <g-image :src="edge.node.image" :alt="edge.node.title" width="424" />
          </div>
          <div class="content">
            <h2 v-html="edge.node.title"></h2>
            <p class="clamp" v-html="edge.node.description"></p>
          </div>
        </a>

      </div>

    </article>
  </Layout>
</template>

<page-query>
query Tools {
	posts: allTools {
    edges {
      node {
        id
        title
        description
        image (width: 800, height: 400, quality: 90)
        link
      }
    }
  }
}
</page-query>
