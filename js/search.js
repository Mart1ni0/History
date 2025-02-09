topics = [
    "Державотворчі процеси та стан економіки",
    "Тестування: Державотворчі процеси та стан економіки",
    "Міжнародні відносини України. Помаранчева революція",
    "Тестування: Міжнародні відносини України. Помаранчева революція",
    "Суспільно-політичне життя України у 2005-2013 рр.",
    "Тестування: Суспільно-політичне життя України у 2005-2013 рр."
]

links = [
    "topic1.html",
    "test1.html",
    "topic2.html",
    "test2.html",
    "topic3.html",
    "test3.html"
]

function displayResults(results) {
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.innerHTML = ''; 
    
    if (results.length === 0) {
        resultsContainer.style.display = 'none';
        return;
    }

    resultsContainer.style.display = 'block'; 

    results.forEach(result => {
        console.log(window.location.pathname.split('/').pop());
        
        const index = topics.indexOf(result)
        const resultDiv = document.createElement('div');
        resultDiv.classList.add('search-result');
        const resultLink = document.createElement('a');
        if (window.location.pathname.split('/').pop() === 'index.html') resultLink.setAttribute('href', `./view/${links[index]}`);
        else resultLink.setAttribute('href', `./${links[index]}`);
        resultLink.textContent = result;
        resultDiv.appendChild(resultLink);
        resultsContainer.appendChild(resultDiv);
    });
}


function handleSearch(event) {
    const query = event.target.value.trim().toLowerCase();
    
    if (query === "") {
        displayResults([]);  
        return;
    }

    const filteredTopics = topics.filter(topic => topic.toLowerCase().includes(query));
    displayResults(filteredTopics);
}

document.querySelector('.search-input').addEventListener('input', handleSearch);

document.querySelector('.search-button').addEventListener('click', () => {
    const query = document.querySelector('.search-input').value.trim().toLowerCase();
    
    if (query === "") {
        displayResults([]);
        return;
    }

    const filteredTopics = topics.filter(topic => topic.toLowerCase().includes(query));
    displayResults(filteredTopics);
});