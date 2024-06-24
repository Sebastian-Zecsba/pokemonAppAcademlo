import { useDispatch } from "react-redux"
import { setNameTrainer } from "../store/slices/nameTrainerSlice"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const dispatch = useDispatch()
    const ref = useRef()
    const navigate = useNavigate()

    const [isError, setIsError ] = useState(false)

    const handleSubmit = (e) => {
      e.preventDefault()

      if(ref.current.value.includes(' ')){
        setIsError(true)
      }else{
        dispatch(setNameTrainer(ref.current.value))
        navigate('/pokedex')
      }
}

  return (
    <div>
      <div className="login_box">
        <figure className="login_box_img">
          <img src="../../assets/logo.png" alt="Logo" />
        </figure>

        <div className="login_welcome">
          <h1>¡Hi trainer!</h1>
          <p>To start, give me you name</p>
        </div>

        <form onSubmit={handleSubmit} className="login_form">
          <input type="text" ref={ref} placeholder="Your name..."/>

          <button>Comenzar</button>

        </form>

        {isError ? <p className="isError">Your name must not have spaces</p> : ''}
      </div>

      <footer>

        <div className="login_footer">
          <div className="login_circle_one">
            <div className="login_circle_two">
              <div className="login_circle_three"></div>
            </div>
          </div>
        </div>

      </footer>
    </div>
  )
}

export default Login