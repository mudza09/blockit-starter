/* carousel-config.js | https://www.indonez.com | Indonez | MIT License */
class CarouselConfig {
    constructor(settings) {
        this.element = settings.element
        this.interval = settings.interval
        this.control = settings.control
        this.transition = settings.fadeTransition
        this.height = settings.height
    }

    init() {
        if(document.querySelector(this.element) !== null) {
            const carouselWrap = document.querySelector(this.element)
            const carouselItem = carouselWrap.querySelectorAll('.carousel-item')
            const carouselId = carouselWrap.getAttribute('id')

            // give class active for first carousel item
            carouselItem[0].classList.add('active')

            // fade transition option
            if(this.transition) {
                carouselWrap.classList.add('carousel-fade')
            }

            // auto generate button control
            this.generatebutton(carouselWrap)

            // auto generate indicator control
            this.generateIndicator(carouselWrap, carouselItem, carouselId)

            // media query condition
            this.setHeight(carouselItem)

            // bootstrap carousel instance
            new bootstrap.Carousel(carouselWrap, {
                interval: this.interval,
                keyboard: true,
                pause: 'hover',
                ride: 'carousel',
                touch: true,
                wrap: true
            })
        }
        
    }

    generatebutton(carouselWrap) {
        if(this.control.type === 'button' || this.control.type === 'both') {
            const prevBtn = document.createElement('button')
            const nextBtn = document.createElement('button')

            prevBtn.setAttribute('class', 'carousel-control-prev')
            prevBtn.setAttribute('type', 'button')
            prevBtn.setAttribute('data-bs-target', this.element)
            prevBtn.setAttribute('data-bs-slide', 'prev')

            nextBtn.setAttribute('class', 'carousel-control-next')
            nextBtn.setAttribute('type', 'button')
            nextBtn.setAttribute('data-bs-target', this.element)
            nextBtn.setAttribute('data-bs-slide', 'next')

            carouselWrap.appendChild(prevBtn)
            carouselWrap.appendChild(nextBtn)

            // only show on hover
            if(this.control.onHover) {
                carouselWrap.classList.add('control-hover')
            }
        }
    }

    generateIndicator(carouselWrap, carouselItem, carouselId) {
        if(this.control.type === 'indicator' || this.control.type === 'both') {
            const indicatorWrap = document.createElement('div')

            indicatorWrap.setAttribute('class', 'carousel-indicators')
            carouselItem.forEach((each, index) => {
                const btnIndicator = document.createElement('button')
                btnIndicator.setAttribute('type', 'button')
                btnIndicator.setAttribute('aria-label', 'carousel-button')
                btnIndicator.setAttribute('data-bs-target', `#${carouselId}`)
                btnIndicator.setAttribute('data-bs-slide-to', index)
                if(index == 0) {
                    btnIndicator.classList.add('active')
                    btnIndicator.setAttribute('aria-current', true)
                }

                indicatorWrap.appendChild(btnIndicator)
            })

            carouselWrap.appendChild(indicatorWrap)

            // only show on hover
            if(this.control.onHover) {
                carouselWrap.classList.add('indicators-hover')
            }
        }
    }

    setHeight(carouselItem) {
        if(window.matchMedia('(min-width: 992px)').matches) {
            carouselItem.forEach(each => {
                each.style.minHeight = this.height.desktop
            })
        } else if(window.matchMedia('(min-width: 768px)').matches) {
            carouselItem.forEach(each => {
                each.style.minHeight = this.height.tablet
            })
        } else {
            carouselItem.forEach(each => {
                each.style.minHeight = this.height.phone
            })
        }
    }
}