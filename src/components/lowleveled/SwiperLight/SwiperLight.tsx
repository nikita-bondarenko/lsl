import React, {
    ReactElement,
    ReactNode,
    TouchEvent,
    MouseEvent,
    useEffect,
    useState,
    useLayoutEffect,
    createRef
} from 'react';
import {stack} from "../../../hooks/useClassName";
import styles from './SwiperLight.module.css'
import {InView} from 'react-intersection-observer'

type SwiperProps = {
    children: ReactNode | ReactElement,
    className?: string
}

const SwiperLight = ({children, className}: SwiperProps) => {
    const [initX, setInitX] = useState(0)
    const [x, setX] = useState(0)
    const [changedX, setChangedX] = useState(0)
    const [translateX, setTranslateX] = useState(0)
    const [moving, setMoving] = useState(false)
    const [slideIndex, setSlideIndex] = useState(0)
    const [initSlideIndex, setInitSlideIndex] = useState(0)

    const ref = createRef<HTMLDivElement>()

    const getDistance = () => {
        const currentTranslateX = -(ref.current.children[0].getBoundingClientRect().width - ref.current.getBoundingClientRect().width)
        return {
            currentTranslateX
        }
    }

    const getCurrentSlide = () => {

        let distance;
        let index;
        if (ref.current) {
            Array.from(ref.current.children[0].children).forEach((item, itemIndex) => {
                const itemDistance = Math.abs(item.getBoundingClientRect().left - ref.current.parentElement.getBoundingClientRect().left)
                if (distance === undefined || itemDistance < distance) {
                    distance = itemDistance
                    index = itemIndex
                }
            })
        }
        return index;
    }

    const setSlide = (index: number) => {
        if (ref.current && ref.current.children[0].children[index] && index >=0 && index < ref.current.children[0].children.length) {
            const pixels = (ref.current.children[0].children[index].getBoundingClientRect().left - ref.current.children[0].getBoundingClientRect().left)
            const widthWindow = ref.current.parentElement.getBoundingClientRect().width
            const widthWrapper = ref.current.children[0].getBoundingClientRect().width
            const maxTranslate = widthWrapper - widthWindow
            if (maxTranslate< pixels) {
                setTranslateX(- maxTranslate )
                const index = getCurrentSlide()
                index && setSlideIndex(index)
            } else {
                setTranslateX(-pixels)
                setSlideIndex(index)
            }

        }
    }

    useEffect(() => {
        if (moving) {
            const distance = changedX - initX
            setX(distance)
        }
    }, [changedX, moving])


    const startSwiping = ({initX, changedX}: { initX: number, changedX: number }) => {
        setInitX(initX)
        setChangedX(changedX)
        setMoving(true)
        setInitSlideIndex(slideIndex)

    }

    const endSwiping = () => {

        setMoving(false)

        const enoughX = 50

        if (Math.abs(x) > enoughX) {
            if (x < 0) {
                setSlide(initSlideIndex + 1)
            } else if (x > 0) {
                setSlide(initSlideIndex - 1)
            }
        }

        setX(0)
    }

    const swiping = ({changedX}: { changedX: number }) => {
        setChangedX(changedX)
    }

    const touchStart = (e: TouchEvent<HTMLDivElement>) => {
        startSwiping({initX: e.touches[0].clientX, changedX: e.touches[0].clientX})
    }

    const touchMove = (e: TouchEvent<HTMLDivElement>) => {
        swiping({changedX: e.touches[0].clientX})
    }

    const touchMouseStart = (e: MouseEvent<HTMLDivElement>) => {
        startSwiping({initX: e.clientX, changedX: e.clientX})
    }

    const touchMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        swiping({changedX: e.clientX})
    }

    const focusHandler = () => {
        setSlide(Array.from(document.activeElement.parentElement.children).indexOf(document.activeElement))

    }

    return (
        <div className={stack(styles.swiper, className)} onTouchStart={touchStart} onTouchEnd={endSwiping}
             onTouchMove={touchMove} onMouseDown={touchMouseStart}
             onMouseUp={endSwiping} onMouseMove={touchMouseMove} onMouseLeave={endSwiping}>
            <div
                onFocusCapture={focusHandler}
                className={stack(styles.swiper__wrapper, !moving && styles.transition)} ref={ref}
                style={{transform: `translateX(${translateX + x}px)`}}>
                {children}
            </div>
        </div>
    );
};

export default SwiperLight;
