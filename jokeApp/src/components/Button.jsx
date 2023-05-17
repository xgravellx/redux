import {actions, dispatch} from "../redux/index.js";

const {
    joke: {getJokeData, getJokeError, getJokePending}
} = actions;

const Button = ({ children, action }) => {
    const handleClick = () => {
      dispatch(getJokePending());
      setTimeout(() => {
          if (action === 'getJokeData') {
              dispatch(getJokeData('Hazal'));
          } else if (action === 'getJokeError') {
              dispatch(getJokeError('Veri getirilirken hata oluştu'));
          }
      }, 1000)
    };

    return (
        <>
            <button onClick={handleClick}>
                {children}
            </button>
        </>
  );
};

export default Button;
