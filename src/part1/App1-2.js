import { useState } from 'react';

function App2() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  //[Using the State Hook](https://reactjs.org/docs/hooks-state.html)
  // 注意 setCount(count + 1) 和 setCount(prev => prev + 1) 的区别，建议用第二种
  // useState函数不能从循环、条件表达式或任何不是定义组件的函数的地方调用。

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App2