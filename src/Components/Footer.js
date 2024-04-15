import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className="questions">Questions? Contact Us</div>
                <div className="footer">
                    <div className="footer-item">
                        <a target='blank'  >MSR</a>
                        <a target='blank' href="https://www.linkedin.com/in/puneet-patel-5a99b9181/">Puneet Patel</a>
                        <a target='blank'>Privacy</a>
                        <a target='blank'>Speed Test</a>
                    </div>

                    <div className="footer-item">
                        <a target='blank'>Help Centre</a>
                        <a target='blank'  >Jobs</a>
                        <a target='blank'  >cookie prefrences</a>
                        <a target='blank'  >Legal Notices</a>
                    </div>
                    <div className="footer-item">
                        <a target='blank'  >Account</a>
                        <a target='blank'  >Ways to Watch</a>
                        <a target='blank'  >Corporate Information</a>
                        <a target='blank'  >Only on Netflix</a>
                    </div>

                    <div className="footer-item">
                        <a target='blank'  >Media center</a>
                        <a target='blank'  >Term of Use</a>
                        <a target='blank'  >Contact Us</a>
                    </div>
                    <div className="footer-item">
                        <button className="footer-btn">
                            English &nbsp;&nbsp;&nbsp;&nbsp;<i
                                className="fa-solid fa-caret-down"
                            ></i>
                        </button>
                        <div>Netflix  </div>
                        <div>Made By  </div>
                        <div>Puneet Patel </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}
