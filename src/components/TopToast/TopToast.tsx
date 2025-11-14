// src/components/TopToast.js
import React from 'react'
import styles from './TopToast.module.css'
import ThemedImage from '@theme/ThemedImage'
import Link from '@docusaurus/Link'

type TopToastProps = {
  setShowTopToast: (showTopToast: boolean) => void
}

const TopToast = ({ setShowTopToast }: TopToastProps) => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTopToast(false)
  }

  return (
    <Link href="https://logos.co" target="_blank">
      <div className={styles.toast}>
        <span className={styles.message}>
          <span>
            Waku is now Logos Messaging - this site will redirect to
            https://logos.co by the end of 2025. Join us there to take part in
            our testnet node programme.
          </span>
        </span>
        <div>
          <button className={styles.closeButton} onClick={handleClose}>
            <ThemedImage
              alt="Close"
              sources={{
                light: '/icons/close-white.svg',
                dark: '/icons/close-black.svg',
              }}
            />
          </button>
        </div>
      </div>
    </Link>
  )
}

export default TopToast
