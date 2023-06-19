import {useSelector} from "react-redux";
import {AppRootState} from "./state/store";
import Settings from "./Components/Settings/Settings";
import {Display} from "./Components/Display/Display";
import s from './App.module.css'


const App = () => {
    // const [counter, setCounter] = useState(JSON.parse(localStorage.getItem('currentValue') || '0'))
    const isSettings = useSelector<AppRootState, boolean>(state => state.counter.settings)

    // const dispatch = useDispatch()

    const settings = () => {
        // dispatch(setSettingsAC(counter.startValue))
        // localStorage.setItem('startValue', JSON.stringify(startValue))
        // localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }

    // useEffect(() => {
    //     let startValueAsString = localStorage.getItem('startValue')
    //     if (startValueAsString) {
    //         let newValue = JSON.parse(startValueAsString)
    //         setStartValue(newValue)
    //     }
    //     let maxValueAsString = localStorage.getItem('maxValue')
    //     if (maxValueAsString) {
    //         let newValue = JSON.parse(maxValueAsString)
    //         setMaxValue(newValue)
    //     }
    //     let currentValueAsString = localStorage.getItem('currentValue')
    //     if (currentValueAsString) {
    //         let newValue = JSON.parse(currentValueAsString)
    //         setCounter(newValue)
    //     }
    // }, [])

    return (
        <div className={s.border}>
            {isSettings
                ? <Display/>
                : <Settings/>
            }
        </div>
    );
};

export default App;