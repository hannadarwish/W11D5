import {useState} from 'react';
import ReviewForm from './ReviewForm';


const PawsRatingInput = ({ rating, disabled, onChange }) => {
const [activeRating,setActiveRating] = useState(rating);
const mouseHoverEnterHandler = (event,number) => {
  if(disabled===false){
    setActiveRating(number)
  }
}
const mouseHoverLeaveHandler = (e) => {
  if(disabled===false){
    setActiveRating(activeRating)
  }
}

const mouseOnClickHandler = (e) => {
  onChange(e, activeRating);
}

  return (
    <>
    {/* <input
      type="number"
      disabled={disabled}
      value={rating}
      onChange={onChange} */}
    {/* /> */}
     <div className='rating-input'>
        <div className={activeRating>0 ? 'filled' : 'empty'} onMouseEnter={(event)=>mouseHoverEnterHandler(event,1)} onMouseLeave={(event)=>mouseHoverLeaveHandler(event)}
        onClick={(event) => mouseOnClickHandler(event)}>
            <i className='fa fa-paw'></i>
        </div>
        <div className={activeRating>1 ? 'filled' : 'empty'} onMouseEnter={(event)=>mouseHoverEnterHandler(event,2)} onMouseLeave={(event)=>mouseHoverLeaveHandler(event)
        } onClick={(event) => mouseOnClickHandler(event)}>
            <i className='fa fa-paw'></i>
        </div>
        <div className={activeRating>2 ? 'filled' : 'empty'} onMouseEnter={(event)=>mouseHoverEnterHandler(event,3)
        } onMouseLeave={(event)=>mouseHoverLeaveHandler(event)} onClick={(event) => mouseOnClickHandler(event, activeRating)} >
            <i className='fa fa-paw'></i>
        </div>
        <div className={activeRating>3 ? 'filled' : 'empty'} onMouseEnter={(event)=>mouseHoverEnterHandler(event,4)
        } onMouseLeave={(event)=>mouseHoverLeaveHandler(event)} onClick={(event) => mouseOnClickHandler(event, activeRating)}>
            <i className='fa fa-paw'></i>
        </div>
        <div className={activeRating>4 ? 'filled' : 'empty'} onMouseEnter={(event)=>mouseHoverEnterHandler(event,5)
        } onMouseLeave={(event)=>mouseHoverLeaveHandler(event)} onClick={(event) => mouseOnClickHandler(event, activeRating)}>
            <i className='fa fa-paw'></i>
        </div>
    </div> 
    </>
  );
};

export default PawsRatingInput;