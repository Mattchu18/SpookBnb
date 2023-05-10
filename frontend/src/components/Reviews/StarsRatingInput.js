import { useState, useEffect } from "react"
import "./StarsRatingInput.css"

const StarsRatingInput = ({ stars, disabled, onChange }) => {
    const [activeStars, setActiveStars] = useState(stars)

    useEffect(() => {
        setActiveStars(stars)

    }, [stars])

    console.log("onChange: ", onChange)

    //can refactor this to an array method or forLoop
    return (
        <>
            <div className="stars-input">
                <div onMouseEnter={(e) => disabled === false ? setActiveStars(1) : null}
                    onMouseLeave={(e) => disabled === false ? setActiveStars(stars) : null}
                    className={(activeStars >= 1 ? 'filled' : 'empty')}
                    onClick={(e) => disabled === false ? onChange(1) : null}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div onMouseEnter={(e) => disabled === false ? setActiveStars(2) : null}
                    onMouseLeave={(e) => disabled === false ? setActiveStars(stars) : null}
                    className={(activeStars >= 2 ? 'filled' : 'empty')}
                    onClick={() => disabled === false ? onChange(2) : null}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div onMouseEnter={(e) => disabled === false ? setActiveStars(3) : null}
                    onMouseLeave={(e) => disabled === false ? setActiveStars(stars) : null}
                    className={(activeStars >= 3 ? 'filled' : 'empty')}
                    onClick={() => disabled === false ? onChange(3) : null}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div onMouseEnter={(e) => disabled === false ? setActiveStars(4) : null}
                    onMouseLeave={(e) => disabled === false ? setActiveStars(stars) : null}
                    className={(activeStars >= 4 ? 'filled' : 'empty')}
                    onClick={() => disabled === false ? onChange(4) : null}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
                <div onMouseEnter={(e) => disabled === false ? setActiveStars(5) : null}
                    onMouseLeave={(e) => disabled === false ? setActiveStars(stars) : null}
                    className={(activeStars >= 5 ? 'filled' : 'empty')}
                    onClick={() => disabled === false ? onChange(5) : null}>
                    <i class="fa fa-star" aria-hidden="true"></i>
                </div>
            </div>
        </>
    );
};

export default StarsRatingInput;
