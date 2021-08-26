
/*
    The Flare search bar provided by the HomeSearchBar Skin, has a Filter function, 
    which allows you to only show results that match a set of concepts defined by a filter.
    The filter UX is considered by our UX people consided unacceptable for the following reasons:
    a) When you select a filter, the value of the filter is shown as part of the placeholder text ("how can we help you") - not a natual place for it
    b) Once you start typing in the search box the placholder text dissapears - and along with it the filter value. At this point there is no way a user can
       see what the current filter value is.
    c) On the search result page there is no indication which filter was used
    
    My solution was to add two elements:
    1) I added an element that displays the currently selected filter when it is set (unless it is set to the 1st filter which is always None)
    2) I added the currently selected filter as part of the seach result title text (called #results-heading by Madcap).
    
    The HTML for the currently selected filter which is part of the search bar is:
        <MadCap:searchBarProxy data-mc-skin="/Project/Skins/HomeSearchBar.flskn" />
        <!-- widget to show the current filter value -->
        <div class="search-filter-display-comp hidden">
            <label>Filter: 
            </label>
            <label class="search-filter-display">
            </label>
        </div>
        
The following code was cloned from Madcap functions SetSelectedSearchFilter and UpdateSearchFilterState
You can see in the comments what I changed from the original code.   
*/
/* overwrite MadCap function */
var searchResultLabelUpdated = false;
(function MadCapOverwriteInit() {
        /* START Added this */

        let label = " Filtered by :" //Added: Text added to #results-heading
        var isTriPane = false; //hardcoded
        function mySetSelectedSearchFilter(c) {
            $(".search-filter").data("filter", c);
            $(".search-filter-display").text(MadCap.Utilities.EncodeHtml(c));
            if (!isTriPane) {
                var a = $(".search-field");
                if (!a.attr("data-placeholder")) {
                    a.attr("data-placeholder", a.attr("placeholder"))
                }
                var b = MadCap.Utilities.EncodeHtml(a.attr("data-placeholder") /*RM THIS + " " + c*/);
                a.attr("placeholder", b);
                $(".search-filter").attr("title", c)
            } else {
                $(".search-filter > span").text(c)
            }
        }
        
        function myUpdateSearchFilterState(e, d) {
            //check if its the 1st entry (1st child of 1st child)
            var a = $(".search-filter-content", d);
            var f = a.children()[0];
            var b = $(f).children()[0];
            var c = $(b).text().trim();
            //if its not the first child set the button to selected
            e !== c ? $(".search-filter").addClass("selected") : $(".search-filter").removeClass("selected")
            if (e !== c) {
                $(".search-filter-display-comp").removeClass("hidden");
            } else {
                $(".search-filter-display-comp").addClass("hidden");
            }
        }

        function getQueryString() {
           let result = {};
           let queryString = location.search.slice(1);
           let re = /([^&=]+)=([^&]*)/g;
           let m;
           while (m = re.exec(queryString)) {
              result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
           }

           return result;
        }
    /* END Added this */
    $( document ).ready(function() {
        /* START copied from MadCapAll.js*/
        /* START Added this */
        
        $(".search-filter").on("click", function() {
            var $filters = $(".search-filter-content button")
            $filters.off("click");
            $filters.on("click", function(g) {
        /* END Added this */
        //RM THIS $(".search-filter-content button").on("click", function(g) {
                g.preventDefault();
                var d = $(g.target);
                var h = d.text().trim();
                var a = d.closest(".search-bar").children(".search-field");
                var i = a.val();
                var f = d.closest(".search-filter-wrapper");
                var b = f.children(".search-filter");
                var c = d.closest(".search-filter-content");
                //RM THIS SetSelectedSearchFilter(h);
                /* START add */
                mySetSelectedSearchFilter(h);
                myUpdateSearchFilterState(h, f);
                /* END sdd */
                b.attr("title", h);
                CloseSearchFilter(0, 0, c, b);
                RedoSearch(i, h)
            });
        
        })
        //if this is a search then set the FilterState - specifically show the hidden .search-filter-display-comp
        let myParam = getQueryString()["f"];
		if (!searchResultLabelUpdated && myParam) { 
            searchResultLabelUpdated = true;
        	let ele = document.querySelector("#results-heading")
            if (ele) {
                ele.innerHTML += ` ( ${label} '${myParam}')`
            }
            $(".search-filter-display").text(myParam);
            myUpdateSearchFilterState(myParam,$(".search-filter-wrapper"))
        }   
    })
 })();
 


