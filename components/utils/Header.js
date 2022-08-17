import React from 'react'
import Link from 'next/link'

export const Header = () => {
    const headerStyle = {
        position: 'relative',
        padding: "1.5rem 1rem 1.2rem 1rem",
        color: '#fff',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'space-between',
    }
    const btnStyle = {
        padding: '4px 13px 4px 13px', 
        border: 'solid 1px #f8f9fa', 
        borderRadius: '5px',
        color: '#fff',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: '18px'
    }
    return (
        <div style={headerStyle}>
            <div>
                <Link href="/videos">
                    <a style={btnStyle}>go to home</a>
                </Link>
            </div>
        </div>
    )
}