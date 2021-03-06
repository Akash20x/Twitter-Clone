import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext'
import Icon from '../UI/Icon/Icon'
import { RECHIRP } from '../../constants/icon'
import styles from './styles.module.css'

const ChirpRechirpHeader = (props) => {
    const { state } = useContext(AuthContext)
    return (
        <section className={styles['chirp__rechirp']}>
            <Icon
                width='14px'
                height='14px'
                fill='rgb(101, 119, 134)'
                d={RECHIRP.d}
            />
            <Link
                to={`/${props.user}`}
            >
                {props.user === state.user
                    ? 'You Retweeted'
                    : `${props.user} Retweeted`}
            </Link>
        </section>
    )
}

export default ChirpRechirpHeader