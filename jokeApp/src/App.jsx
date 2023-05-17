import './App.css'
import Button from "./components/Button.jsx";
import {useSelector} from "react-redux";
import {selectors} from "./redux/index.js";

const {
    joke: {selectGetJokePending, selectGetJokeError, selectGetJokeFulFilled}
} = selectors;

function App() {
    const pending = useSelector(selectGetJokePending);
    const data = useSelector(selectGetJokeFulFilled);
    const error = useSelector(selectGetJokeError);

    return (
        <div>
            <Button action="getJokeData">Get Data</Button>
            {pending && <p>Bekleniyor</p>}
            {data && !error && <p>{data}</p>}

            <Button action="getJokeError">Get Error</Button>
        </div>
  )
}

export default App;
