/*!
 * Blogger Tabbed Style Table of Content Widget by Taufik Nurrohman
 * Free for change but keep the original attribution.
 * URL: https://plus.google.com/108949996304093815163/about
 */
!
function (a, b) {
    var c = (new Date).getTime(),
        d = {
            blogUrl: "http://dte-feed.blogspot.com",
            containerId: "tabbed-toc",
            activeTab: 1,
            showDates: !1,
            showSummaries: !1,
            numChars: 200,
            showThumbnails: !1,
            thumbSize: 40,
            noThumb: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAA3NCSVQICAjb4U/gAAAADElEQVQImWOor68HAAL+AX7vOF2TAAAAAElFTkSuQmCC",
            monthNames: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"],
            newTabLink: !0,
            maxResults: 99999,
            preload: 0,
            sortAlphabetically: !0,
            showNew: !1,
            newText: ' &ndash; <em style="color:red;">Baru!</em>'
        };
    if ("undefined" == typeof tabbedTOC) tabbedTOC = d;
    else for (var e in d) d[e] = "undefined" != typeof tabbedTOC[e] ? tabbedTOC[e] : d[e];
    a["clickTabs_" + c] = function (a) {
        for (var b = document.getElementById(d.containerId), c = b.getElementsByTagName("ol"), e = b.getElementsByTagName("ul")[0], f = e.getElementsByTagName("a"), g = 0, h = c.length; h & gt; g; ++g) c[g].style.display = "none",
        c[parseInt(a, 10)].style.display = "block";
        for (var i = 0, j = f.length; j & gt; i; ++i) f[i].className = "",
        f[parseInt(a, 10)].className = "active-tab"
    }, a["showTabs_" + c] = function (e) {
        for (var f = parseInt(e.feed.openSearch$totalResults.$t, 10), g = d, h = e.feed.entry, i = e.feed.category, j = "", l = 0; l & lt;
        (g.showNew === !0 ? 5 : g.showNew) & amp; & amp; l !== h.length; ++l) h[l].title.$t = h[l].title.$t + (g.showNew !== !1 ? g.newText : "");
        h = g.sortAlphabetically ? h.sort(function (a, b) {
            return a.title.$t.localeCompare(b.title.$t)
        }) : h,
        i = g.sortAlphabetically ? i.sort(function (a, b) {
            return a.term.localeCompare(b.term)
        }) : i,
        j = '<span class="toc-line"></span><ul class="toc-tabs">';
        for (var m = 0, n = i.length; n & gt; m; ++m) j += '<li class="toc-tab-item-' + m + '"><a onclick="clickTabs_' + c + "(" + m + ');return false;" onmousedown="return false;" href="javascript:;">' + i[m].term + "</a></li>";
        j += "</ul>",
        j += '<div class="toc-content">';
        for (var o = 0, n = i.length; n & gt; o; ++o) {
            j += '<ol class="panel" data-category="' + i[o].term + '"',
            j += o != g.activeTab - 1 ? ' style="display:none;"' : "",
            j += ">";
            for (var p = 0; f & gt; p & amp; & amp; p !== h.length; ++p) {
                for (var q, r = h[p], s = r.published.$t, t = g.monthNames, u = r.title.$t, v = ("summary" in r & amp; & amp; g.showSummaries === !0 ? r.summary.$t.replace(/<br *\/?>/g, " ").replace(/<.*?>/g, "").replace(/[<>]/g, "").substring(0, g.numChars) + "&hellip;" : ""), w = ("media$thumbnail" in r & amp; & amp; g.showThumbnails === !0 ? '<img class="thumbnail" style="width:' + g.thumbSize + "px;height:" + g.thumbSize + 'px;" alt="" src="' + r.media$thumbnail.url.replace(/\/s\d(\-c)?\//, "/s" + g.thumbSize + "-c/") + '"/>' : '<img class="thumbnail" style="width:' + g.thumbSize + "px;height:" + g.thumbSize + 'px;" alt="" src="' + g.noThumb.replace(/\/s\d(\-c)?\//, "/s" + g.thumbSize + "-c/") + '"/>'), x = r.category || [], y = g.showDates ? '<time datetime="' + s + '" title="' + s + '">' + s.substring(8, 10) + " " + t[parseInt(s.substring(5, 7), 10) - 1] + " " + s.substring(0, 4) + "</time>" : "", z = 0, A = r.link.length; A & gt; z; ++z) if ("alternate" === r.link[z].rel) {
                    q = r.link[z].href;
                    break
                }
                for (var B = 0, C = x.length; C & gt; B; ++B) {
                    var D = g.newTabLink ? ' target="_blank"' : "";
                    x[B].term === i[o].term & amp; & amp;
                    (j += '<li title="' + x[B].term + '"', j += g.showSummaries ? ' class="bold"' : "", j += '><a href="' + q + '"' + D + ">" + u + y + "</a>", j += g.showSummaries ? '<span class="summary">' + w + v + '<span style="display:block;clear:both;"></span></span>' : "", j += "</li>")
                }
            }
            j += "</ol>"
        }
        j += "</div>",
        j += '<div style="clear:both;"></div>',
        b.getElementById(g.containerId).innerHTML = j,
        a["clickTabs_" + c](g.activeTab - 1)
    };
    var f = b.getElementsByTagName("head")[0],
        g = b.createElement("script");
    g.src = d.blogUrl.replace(/\/+$|[\?&#].*$/g, "") + "/feeds/posts/summary?alt=json-in-script&max-results=" + d.maxResults + "&orderby=published&callback=showTabs_" + c,
    "onload" !== d.preload ? a.setTimeout(function () {
        f.appendChild(g)
    }, d.preload) : a.onload = function () {
        f.appendChild(g)
    }
}(window, document);