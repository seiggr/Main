let spoilers = document.querySelectorAll('.spoiler');
let spoilerDataCollection = document.querySelectorAll('.spoiler-data');

let toggleClasses = function (spoilerData, spoiler) {
    spoilerData.classList.toggle('hidden');
    spoiler.classList.toggle('active');
}

for (let spoiler of spoilers) {
    spoiler.addEventListener('mouseover', () => {
        let spoilerData = spoiler.querySelector('.spoiler-data');
        for (let spoilerDataItem of spoilerDataCollection) {
            if (spoilerData === spoilerDataItem) {
                toggleClasses(spoilerData, spoiler);
            } else {
                spoilerDataItem.classList.add('hidden');
                if (spoilerDataItem.parentNode !== spoiler) {
                    spoilerDataItem.parentNode.classList.remove('active');
                }
            }
        }
    });
}



