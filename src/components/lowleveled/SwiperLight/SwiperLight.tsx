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
    const [isLeftBorderInView, setIsLeftBorderInView] = useState(true)
    const [isRightBorderInView, setIsRightBorderInView] = useState(true)

    const ref = createRef<HTMLDivElement>()

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
    }

    const endSwiping = () => {
        setMoving(false)

        const gap = ref.current.children[0].children[1].getBoundingClientRect().x - ref.current.children[0].children[0].getBoundingClientRect().x - ref.current.children[0].children[0].getBoundingClientRect().width
        const width = Array.from(ref.current.children[0].children).reduce((acc, item) => acc + item.getBoundingClientRect().width, 0) + gap * (ref.current.children[0].children.length - 1)
        const currentTranslateX = -(width - ref.current.clientWidth)
// console.log('gap', gap)
//         console.log('width', width)

        setTranslateX(prev => {
            const res = prev + x
            // console.log(res, currentTranslateX)
            if (res < currentTranslateX) {
                return currentTranslateX
            } else if (res > 0) {
                return 0
            } else {
                return res
            }
        })
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

    return (
        <div className={stack(styles.swiper, className)} onTouchStart={touchStart} onTouchEnd={endSwiping}
             onTouchMove={touchMove} onMouseDown={touchMouseStart}
             onMouseUp={endSwiping} onMouseMove={touchMouseMove} onMouseLeave={endSwiping}>
            <div
                className={stack(styles.swiper__wrapper, !moving && styles.transition)} ref={ref}
                style={{transform: `translateX(${translateX + x}px)`}}>
                {children}
            </div>
        </div>
    );
};

export default SwiperLight;
