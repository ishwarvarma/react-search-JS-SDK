const searchConfigurations = {
    siteName: 'wildearthclone-neto-com-au808941566310465',
    siteKey: 'e6959ae0b643d51b565dc3e01bf41ec1',
    searchEndPoint: 'https://search.unbxd.io/',
    searchQueryParam: 'q',
    browseQueryParam: 'p',
    productAttributes: [
        'title',
        'uniqueId',
        'imageUrl',
        'RRP_Price',
        'unbxd_price',
        'productUrl'
    ],
    defaultFilters: null,
    spellCheck: {
        enabled: false
    },
    pageSize: 10,
    startPageNo: 0,
    facetMultiSelect: true,
    facetMultiSelectionMode: true,
    updateUrls: false,
    variants: {
        enabled: false,
        count: 1,
        attributes: [
            'v_title',
            'vId',
            'imageUrl',
            'v_RRP_Price',
            'v_unbxd_price',
            'productUrl'
        ],
        mapping: {},
        groupBy: ''
    },
    extraParams: {
        version: 'V2',
        // 'f.categoryPath.displayName': 'category',
        // 'facet.multilevel': 'categoryPath',
        'f.categoryPath.max.depth': '',
        'f.categoryPath.facet.limit': ''
        // "f.categoryPath.facet.version": "V2",
        // 'category-filter': 'All Products',
    },
    facetMultilevel: true,
    facetDepth: 6,
    productIdAttribute: 'uniqueId',
    showSwatches: false,
    swatchMap: {},
    onEvent: () => {},
    getCategoryId: () => {},
    applyMultipleFilters: false,
    hashMode: true,
    enableUnbxdAnalytics: true
};

export default searchConfigurations;
