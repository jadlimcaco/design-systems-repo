<template>
  <Layout>
    <article class="post post-ds">

      <header class="post-header clearfix">
        <div class="post-head-wrap">
          <div class="post-head-content">
            <h1 class="post-title">Design Systems Gallery</h1>
            <p>A comprehensive and curated list of design systems, style guides and pattern libraries that you can use for inspiration.</p>
          </div>
          <g-image immediate="true" class="illustration" src="~/assets/images/illustration-ds.svg" width="94" height="86" alt="Design System Legos" />
        </div>
      </header>

      <!-- Filter -->
      <ul class="filter">
        <li><g-link to="/design-systems" exact-active-class="active">A - Z <span class="number"></span></g-link></li>
        <li><g-link to="/design-systems-recent" exact-active-class="active">Most Recent <span class="number"></span></g-link></li>
      </ul>

      <div class="post-content">

        <!-- Block -->
        <a class="block block-ds" v-for="edge in $page.posts.edges" :key="edge.node.id" :href="edge.node.link" target="_blank" rel="nofollow noreferrer">
          <div class="img-wrap">
            <g-image :src="edge.node.image" :alt="edge.node.title" width="424" />
          </div>
          <div class="content">
            <h3 v-html="edge.node.company"></h3>
            <h2 v-html="edge.node.title"></h2>
            <p class="clamp" v-html="edge.node.description"></p>
          </div>
        </a>

      </div>

    </article>
  </Layout>
</template>

<page-query>
query Systems {
	posts: allSystems(sortBy: "title", order: ASC) {
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
}
</page-query>

<script>
export default {
  name: 'design-systems',
  metaInfo: {
    title: 'Design Systems Repo | A Collection of Design System Resources',
    meta: [
      { name: 'description', content: 'This is not a comprehensive list of every design system that I have come across. Rather, it\'s a collection of ones that I personally found to be helpful and inspiring for my work.' }
    ],
  }
}
</script>
