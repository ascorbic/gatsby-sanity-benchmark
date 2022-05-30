module.exports = {
  siteMetadata: {
    siteTitle: `Gatsby Sanity Benchmark`,
  },
  plugins: [
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.BENCHMARK_SANITY_PROJECT_ID,
        dataset: process.env.BENCHMARK_SANITY_DATASET,
      },
    },
  ],
}
