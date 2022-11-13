import { useState } from "react"

const App5 = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })


  /**
   * 以下写法是不建议使用的，改变状态必须始终通过将状态设置为一个新的对象来完成(区别请看App2.js)。
   * 在 React中是禁止直接改变状态的，因为它可能导致意想不到的副作用
  const handleLeftClick = () => {
    clicks.left++
    setClicks(clicks)
  }
   */

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right
    }
    setClicks(newClicks)
  }

  // { ...clicks }创建了一个clicks对象的副本
  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

export default App5