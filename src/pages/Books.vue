<template>
  <Layout>
    <article class="post post-books">

      <header class="post-header clearfix">
        <div class="post-head-wrap">
          <div class="post-head-content">
            <h1 class="post-title">Books</h1>
            <p>A list of good books on the subject of design systems. If you have any recommendations, please send me a tweet at <a href="https://twitter.com/jadlimcaco" title="My Twitter" target="_blank" rel="noopener noreferrer">@jadlimcaco</a> and I will add it to the list.</p>
          </div>
          <g-image immediate="true" class="illustration" src="~/assets/images/illustration-books.svg" width="94" height="86" alt="Design System Books" />
        </div>
      </header>

      <div class="post-content">

        <!-- Block -->
        <a class="block block-books" v-for="edge in $page.posts.edges" :key="edge.node.id" :href="edge.node.link" target="_blank" rel="nofollow noreferrer">
          <div class="img-wrap">
            <g-image :src="edge.node.image" :alt="edge.node.title" width="308" />
          </div>
          <div class="content">
            <h3 v-html="edge.node.author"></h3>
            <h2 v-html="edge.node.title"></h2>
            <p class="clamp" v-html="edge.node.description"></p>
          </div>
        </a>

      </div>

    </article>
  </Layout>
</template>

<page-query>
query Books {
	posts: allBooks {
    edges {
      node {
        id
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
  name: 'books',
  metaInfo: {
    title: 'Books | Design Systems Repo',
    meta: [
      { name: 'description', content: 'A list of good books on the subject of design systems. If you have any recommendations, please send me a tweet at @jadlimcaco and I will add it to the list.' }
    ],
  }
}
</script>