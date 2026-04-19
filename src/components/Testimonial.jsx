import testimonialImg from "../assets/pic.jpg"
export default function Testimonial({quote, author, role, photoSrc, portraitAlt, compName, compLogo}) {
    console.log(photoSrc)
    return (
        <>
            {photoSrc ? (
                <div className="tc-wrapper">
                    <div className="tc-container">

                        {
                            photoSrc && (
                                <div className="tc-photo">
                                    <img src={photoSrc} alt={portraitAlt} />
                                </div>
                            )
                        }
                        <p className="tc-text">{quote}</p>
                        <div className="tc-author">
                            <strong>{author}</strong>
                            <span>{role}</span>
                        </div>
                    </div>
                </div>) : (
                <div className="tc-wrapper">
                    <div className="tc-container__no-photo">
                        <div className="inner-wrapper">
                            <h3 className="no-photo__title"><span>{compLogo}</span> <span>{compName}</span></h3>
                            <p className="tc-text-no"><span>&#x201C;</span>{quote}<span>&#x201D;</span></p>
                            <div className="tc-author__no-photo">
                                <strong>{author}</strong><span className="separator">/</span><span>{compName}, {role}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}