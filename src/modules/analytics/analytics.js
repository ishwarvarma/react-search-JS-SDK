/* global Unbxd */

const onCatch = (e) => {
    console.error('Error tracking::', e);
};

export const trackSearch = function (searchQuery) {
    try {
        Unbxd.track('search', { query: searchQuery });
    } catch (e) {
        onCatch(e);
    }
};

export const trackCategory = function (unbxdAnalyticsConf) {
    try {
        Unbxd.track('categoryPage', { ...unbxdAnalyticsConf });
    } catch (e) {
        onCatch(e);
    }
};

export const trackProductClick = function (uniqueId, prank) {
    console.log("test1")
    try {
        Unbxd.track('click', {
            pid: uniqueId,
            prank: prank,
            requestId: null
        });
    } catch (e) {
        onCatch(e);
    }
};

export const trackProductImpressions = function (query, pids) {
    try {
        Unbxd.track('search_impression', {
            query: query,
            pids_list: pids
        });
    } catch (e) {
        onCatch(e);
    }
};

export const trackFacetClick = function (query, facets) {
    try {
        Unbxd.track('facets', {
            query: query,
            facets: facets
        });
    } catch (e) {
        onCatch(e);
    }
};
