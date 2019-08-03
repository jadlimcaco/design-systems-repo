<template>
  <Layout>
    <article class="post post-talks">

      <header class="post-header clearfix">
        <div class="post-head-wrap">
          <div class="post-head-content">
            <h1 class="post-title">Talks on Design Systems</h1>
            <p>Helpful talks and presentations from the best in the industry. Learn more about the innovation that is happening in design systems and design tooling.</p>
          </div>
          <g-image immediate="true" class="illustration" src="~/assets/images/illustration-talks.svg" width="94" height="86" alt="Talks on Design Systems" />
        </div>
      </header>

      <div class="post-content">

        <!-- Block -->
        <a class="block block-talks" v-for="edge in $page.posts.edges" :key="edge.node.id" :href="edge.node.link" target="_blank" rel="nofollow noreferrer">
          <div class="img-wrap">
            <g-image :src="edge.node.image" :alt="edge.node.title" width="424" />
          </div>
          <div class="content">
            <h3 v-html="edge.node.speaker"></h3>
            <h2 v-html="edge.node.title"></h2>
            <p class="clamp" v-html="edge.node.description"></p>
            <span class="date">{{ edge.node.date }}</span>
          </div>
        </a>
      </div>

    </article>
  </Layout>
</template>

<page-query>
query Talks {
	posts: allTalks(sortBy: "date", order: DESC) {
    edges {
      node {
        id
        speaker
        title
        description
        date (format: "MMMM D, YYYY")
        image (width: 800, height: 400, quality: 90)
        link
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Talks',
  metaInfo: {
    title: 'Talks | Design Systems Repo',
    meta: [
      { name: 'description', content: 'Helpful talks and presentations from the best in the industry. Learn more about the innovation that is happening in design systems and design tooling.' }
    ],
  }
}
</script>