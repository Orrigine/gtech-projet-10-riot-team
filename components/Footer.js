import React from 'react';
import Link from 'next/link';
import "../css/Home.module.css";



export default function Footer() {
        return(
            <>
            <footer className="">
                <div className="footer-back">
                    <div className="footer-top center">
                        <p>Footer content</p>
                    </div>
                        
                    <div className="grid">
                        <div className="left">
                            <h2>Links</h2>
                        </div>
                        <div className="mid">
                            <h2>Newsletter</h2>
                            <div class="webflow-style-input">
                                <input class="" type="email" placeholder="What's your email?"></input>
                                <button type="submit"><i class="icon ion-android-arrow-forward"></i></button>
                            </div>
                        </div>
                        <div className="right">
                            <h2>Logos</h2>
                        </div>
                    </div>
                   
                </div>
            </footer>
        </>
    );

}