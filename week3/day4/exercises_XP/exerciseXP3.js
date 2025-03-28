document.addEventListener('DOMContentLoaded', function() {
    let allBoldItems;
    function getBoldItems() {
        const paragraphs = document.querySelector('p');
        allBoldItems = paragraphs.querySelectorAll('strong');
        return allBoldItems;
    }
    function highlight() {
        allBoldItems.forEach(item => {
            item.style.color = 'blue';
        })
    };
    function returnItemsToDefault(){
        allBoldItems.forEach(item => {
            item.style.color = '';
        })
    }
    getBoldItems()
    const paragraph = document.querySelector('p');
    paragraph.addEventListener('mouseover', highlight);
    paragraph.addEventListener('mouseout', returnItemsToDefault);
});