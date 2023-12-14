new Crawler({
  rateLimit: 8,
  maxDepth: 10,
  maxUrls: 5000,
  startUrls: [
    "https://subhadipbhowmik.github.io/30-Days-Of-CPP/",
    "https://subhadipbhowmik.github.io/30-Days-Of-CPP/docs/",
  ],
  renderJavaScript: false,
  sitemaps: ["https://subhadipbhowmik.github.io/30-Days-Of-CPP/sitemap.xml"],
  ignoreCanonicalTo: false,
  discoveryPatterns: [
    "https://subhadipbhowmik.github.io/30-Days-Of-CPP/docs/**",
  ],
  schedule: "at 19:12 on Tuesday",
  actions: [
    {
      indexName: "subhadipbhowmik",
      pathsToMatch: [
        "https://subhadipbhowmik.github.io/30-Days-Of-CPP/**",
        "https://subhadipbhowmik.github.io/30-Days-Of-CPP/docs/**",
        "https://subhadipbhowmik.github.io/30-Days-Of-CPP/blog/**",
      ],
      recordExtractor: ({ helpers }) => {
        return helpers.docsearch({
          recordProps: {
            lvl1: ["header h1", "article h1", "main h1", "h1", "head > title"],
            content: ["article p, article li", "main p, main li", "p, li"],
            lvl0: {
              selectors: "",
              defaultValue: "Documentation",
            },
            lvl2: ["article h2", "main h2", "h2"],
            lvl3: ["article h3", "main h3", "h3"],
            lvl4: ["article h4", "main h4", "h4"],
            lvl5: ["article h5", "main h5", "h5"],
            lvl6: ["article h6", "main h6", "h6"],
          },
          aggregateContent: true,
          recordVersion: "v3",
        });
      },
    },
  ],
  safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 30 } },
  initialIndexSettings: {
    subhadipbhowmik: {
      attributesForFaceting: ["type", "lang"],
      attributesToRetrieve: [
        "hierarchy",
        "content",
        "anchor",
        "url",
        "url_without_anchor",
        "type",
      ],
      attributesToHighlight: ["hierarchy", "content"],
      attributesToSnippet: ["content:10"],
      camelCaseAttributes: ["hierarchy", "content"],
      searchableAttributes: [
        "unordered(hierarchy.lvl0)",
        "unordered(hierarchy.lvl1)",
        "unordered(hierarchy.lvl2)",
        "unordered(hierarchy.lvl3)",
        "unordered(hierarchy.lvl4)",
        "unordered(hierarchy.lvl5)",
        "unordered(hierarchy.lvl6)",
        "content",
      ],
      distinct: true,
      attributeForDistinct: "url",
      customRanking: [
        "desc(weight.pageRank)",
        "desc(weight.level)",
        "asc(weight.position)",
      ],
      ranking: [
        "words",
        "filters",
        "typo",
        "attribute",
        "proximity",
        "exact",
        "custom",
      ],
      highlightPreTag: '<span class="algolia-docsearch-suggestion--highlight">',
      highlightPostTag: "</span>",
      minWordSizefor1Typo: 3,
      minWordSizefor2Typos: 7,
      allowTyposOnNumericTokens: false,
      minProximity: 1,
      ignorePlurals: true,
      advancedSyntax: true,
      attributeCriteriaComputedByMinProximity: true,
      removeWordsIfNoResults: "allOptional",
    },
  },
  appId: "SKRAQTXG41",
  apiKey: "4eadbd9906c2db99f8c4d53bb7202144",
  indexName: "subhadipbhowmik",
  extraUrls: [
    "https://subhadipbhowmik.github.io/30-Days-Of-CPP/docs/intro",
    "https://subhadipbhowmik.github.io/30-Days-Of-CPP/blog",
  ],
});
