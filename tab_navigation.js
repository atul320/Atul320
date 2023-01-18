 <ul class="nav list-inline dynamic_table_tabs">
                    <li class="px-1"><a class="text-decoration-none className tabs activeClassName" href="#"></a></li>
                    <li class="px-1"><a class="text-decoration-none className tabs activeClassName" href="#"></a></li>
                    <li class="px-1"><a class="text-decoration-none className tabs activeClassName" href="#"></a></li>
                    <li class="px-1"><a class="text-decoration-none className tabs activeClassName" href="#"></a></li>
                    <li class="px-1"><a class="text-decoration-none className tabs activeClassName" href="#"></a></li>
                    <li class="px-1"><a class="text-decoration-none className tabs activeClassName" href="#"></a></li>
                </ul> 
function tabs_navigation(className, activeClassName) {
                $(className).click(function () {
                    var listItems = $(className);
                    for (let i = 0; i < listItems.length; i++) {
                        listItems[i].classList.remove(activeClassName);
                    }
                    this.classList.add(activeClassName);
                });
