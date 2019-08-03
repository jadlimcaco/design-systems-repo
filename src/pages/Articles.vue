<template>
  <Layout>
    <article class="post post-articles">

      <header class="post-header clearfix">
        <div class="post-head-wrap">
          <div class="post-head-content">
            <h1 class="post-title">Articles</h1>
            <p>An index of insightful articles about design systems. If you've written an article that you want to add here, just tweet me at <a href="https://twitter.com/jadlimcaco" target="_blank" title="My Twitter" rel="noopener noreferrer">@jadlimcaco</a>.</p>
          </div>
          <g-image immediate="true" class="illustration" src="~/assets/images/illustration-articles.svg" width="94" height="86" alt="Design System Articles" />
        </div>
      </header>

          <!-- Tags -->
          <!-- <ul class="filter">
            <li class="active"><a href="#" class="all">All <span class="number"></span></a></li>
            <li><a href="#" class="animation">Animation</a></li>
            <li><a href="#" class="code">Code</a></li>
            <li><a href="#" class="contribution">Contribution</a></li>
            <li><a href="#" class="design-tokens">Design Tokens</a></li>
            <li><a href="#" class="figma">Figma</a></li>
            <li><a href="#" class="leadership">Leadership</a></li>
            <li><a href="#" class="patterns">Patterns</a></li>
            <li><a href="#" class="process">Process</a></li>
            <li><a href="#" class="sketch">Sketch</a></li>
          </ul> -->

      <div class="post-content holder">

        <!-- Block -->
        <a class="block block-ds" v-for="edge in $page.posts.edges" :key="edge.node.id" :href="edge.node.link" target="_blank" rel="nofollow noreferrer">
          <div class="content">
            <h3 v-html="edge.node.author"></h3>
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
query Articles {
	posts: allArticles {
    edges {
      node {
        id
        title
        description
        link
        date (format: "MMMM D, Y")
        author
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Articles | Design Systems Repo',
    meta: [
      {
        name: 'description',
        content: 'This is not a comprehensive list of every design system that I have come across. Rather, it\'s a collection of ones that I personally found to be helpful and inspiring for my work.'
      }
    ]
  }
}
</script>