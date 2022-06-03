import './credit.scss'

import { useRef, useEffect } from 'react'

import { bgVideo } from '../../../assets/videos'
import Button from '../../button/Button'

const Credit = props => {

    const videoRef = useRef(null)

    useEffect(() => {
        videoRef.current.play()
        const pauseVideo = () => {
            if (!document.hidden) {
                videoRef.current.play()
            } else {
                videoRef.current.pause()
            }
        }
        document.addEventListener('webkitvisibilitychange', pauseVideo)
        return () => {
            document.removeEventListener('webkitvisibilitychange', pauseVideo)
        }
    }, []);

    return (
        <div className={`credit overlay ${props.isActive ? 'active' : ''}`}>
            <video
                ref={videoRef}
                width="100%"
                height="auto"
                loop={true}
                className="overlay"
            >
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className="credit__content">
                <div className="title">
                    <span>Ini Saatnya Kamu</span>
                    <h2 className="main-color">STOP RUNGKAD</h2>
                </div>
                <div className="btns m-t-4">
                    <a href='https://9p-4t2ztv-69.net/?ref=naga015&utm_source=nagassg88&utm_medium=ssgseo&utm_campaign=nagassg88'><Button className="btn-main">Main Sekarang</Button></a>
                    <a href='https://9p-4t2ztv-69.net/?ref=naga015&utm_source=nagassg88&utm_medium=ssgseo&utm_campaign=nagassg88'><Button className="btn-second">DAFTAR</Button></a>
                </div>
            </div>
        </div>
    )
}

export default Credit
