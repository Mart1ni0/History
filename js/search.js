document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".search-input");
    const searchResults = document.getElementById("search-results");
    const mainContent = document.querySelector("main");

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = "";

        if (query.length === 0) {
            searchResults.style.display = "none";
            return;
        }
        
        let results = [];
        const elementsToSearch = mainContent.querySelectorAll("h1, h2, h3, p, ul, ol, li");
        
        elementsToSearch.forEach(element => {
            const text = element.textContent.toLowerCase();
            
            if (text.includes(query)) {
                results.push({
                    text: element.textContent,
                    element: element
                });
            }    
        });

        if (results.length === 0) {
            searchResults.innerHTML = "<p>Нічого не знайдено</p>";
            return;
        }

        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.classList.add("search-result");
            resultElement.innerHTML = highlightMatch(result.text, query);
            resultElement.addEventListener("click", function () {
                result.element.scrollIntoView({ behavior: "smooth", block: "center" });
                result.element.classList.add("highlighted");
                setTimeout(() => {
                    result.element.classList.remove("highlighted");
                }, 1500);
            });
            searchResults.appendChild(resultElement);
        });
        searchResults.style.display = "block"; 
    });

    function highlightMatch(text, query) {
        const regex = new RegExp(`(${query})`, "gi");
        return text.replace(regex, "<mark>$1</mark>");
    }

    searchInput.addEventListener("focus", function () {
        if (searchInput.value.trim().length > 0) {
            searchResults.style.display = "block";
        }
    });
    searchInput.addEventListener("blur", function () {
        setTimeout(() => {
            searchResults.style.display = "none"; 
        }, 200);
    });
});