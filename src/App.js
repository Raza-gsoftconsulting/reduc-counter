import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { incNumber, decNumber } from './actions/action';

const App = () => {
  const myState = useSelector((state) => state.ChangingInNumber)
  const dispatch = useDispatch();
return (
  <div className='container'>
    <h2>Increment/Decrement Counter</h2>
    <h4>Using React & Redux</h4>

    <div className='quantity'>
    <button className='quantity_minus' title='Decrement' onClick={() => dispatch(decNumber())}><span> - </span></button>
    <input name='quantity' type='text' className='quantity_input' value={myState}></input>
    <button className='quantity_plus' title='Increment' onClick={() => dispatch(incNumber())}><span> + </span></button>
    </div>
  </div>
)
}

export default App;
