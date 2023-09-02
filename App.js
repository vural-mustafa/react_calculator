import {useState} from 'react';
import * as math from 'mathjs'
import './App.css';
import Button from './components/button';
import Input from './components/input'
function App() {
  const [text,setText]= useState("")
  const [result,setResult]=useState("");
  
  const addTotext = (val) =>{
    setText((text)=>[...text,val+ " "])
  }

  const calculateResult = ()=>{
    const input = text.join("")
    setResult(math.evaluate(input))
  }

  const resetInput = ()=>{
    setText("");
    setResult("");
  }

  return (
    <div className='App'>
      <div className='calc-wrapper'>
        <Input text={text} result={result}/>
        <div className='row'>
        <Button symbol="%" color="#800000" handleclick={addTotext}/>
        <Button symbol="CE" color="#800000" />
        <Button symbol="C" color="#800000" handleclick={resetInput}/>
        <Button symbol={<i class="fa-solid fa-delete-left"></i>} color="#800000" />
        </div>
        <div className='row'>
        <Button symbol="1/X" color="#8A2BE2" handleclick={addTotext} />
        <Button symbol="X^2" color="#8A2BE2" handleclick={addTotext} />
        <Button symbol={<i class="fa-solid fa-square-root-variable"></i>} color="#8A2BE2" handleclick={addTotext}  />
        <Button symbol="/"  color="#00AD85" handleclick={addTotext}/>       
        </div>
        <div className='row'>
        <Button symbol="7" handleclick={addTotext} />
        <Button symbol="8" handleclick={addTotext} />
        <Button symbol="9" handleclick={addTotext} />
        <Button symbol="x"  color="#00AD85" handleclick={addTotext}/>       
        </div>
        <div className='row'>
        <Button symbol="4" handleclick={addTotext} />
        <Button symbol="5" handleclick={addTotext}/>
        <Button symbol="6" handleclick={addTotext}/>
        <Button symbol="-"  color="#00AD85" handleclick={addTotext}/>       
        </div>
        <div className='row'>
        <Button symbol="1" handleclick={addTotext} />
        <Button symbol="2" handleclick={addTotext} />
        <Button symbol="3" handleclick={addTotext} />
        <Button symbol="+"  color="#00AD85" handleclick={addTotext}/>       
        </div>
        <div className='row'>
        <Button symbol="+/-" handleclick={addTotext}/>
        <Button symbol="0"  handleclick={addTotext} />
        <Button symbol="," handleclick={addTotext} />
        <Button color="#00AD85"symbol="=" handleclick={calculateResult} />
        </div>

      </div>

    </div>
  );
}

export default App;
