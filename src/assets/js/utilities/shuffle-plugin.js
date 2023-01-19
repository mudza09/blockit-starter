/* shuffle-plugin.js | https://www.indonez.com | Indonez | MIT License */
class ShufflePlugin {
    constructor() {
        this.element = document.querySelectorAll('.masonry-wrapper')
    }

    init() {
        if(this.element.length !== 0) {
            this.element.forEach(each => {
                const shuffleInstance = new window.Shuffle(each, {
                    itemSelector: '.masonry-item'
                });

                this.shuffleFilter(each, shuffleInstance)
            })
        }
    }

    shuffleFilter(element, instance) {
        const filterList = element.parentElement.querySelector('.masonry-filter');

        if (filterList !== null) {
            const filterButtons = Array.from(filterList.children);

            filterButtons.forEach(button => {
                button.addEventListener('click', (e) => {
                    instance.filter(e.target.getAttribute('data-group'))
                })
            })
        }
    }
}

new ShufflePlugin().init()