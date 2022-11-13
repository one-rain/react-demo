import { BrowserRouter, Routes, Route } from "react-router-dom";
import Part11 from './part1/App1-1'
import Part12 from './part1/App1-2'
import Part13 from './part1/App1-3'
import Part14 from './part1/App1-4'
import Part15 from './part1/App1-5'
import Part16 from './part1/App1-6'
import Part17 from './part1/App1-7'
import Part21 from './part2/App2-1'
import Part22 from './part2/App2-2'
import Part23 from './part2/App2-3'

const Home = () => {
  return (
    <div>
      <ul>
        <li><a href="/">首页</a></li>
        <li><a href="/part1-1">练习1-1：修改页面信息</a></li>
        <li><a href="/part1-2">练习1-2：useState1</a></li>
        <li><a href="/part1-3">练习1-3：useState2</a></li>
        <li><a href="/part1-4">练习1-4：useState3</a></li>
        <li><a href="/part1-5">练习1-5：useState4</a></li>
        <li><a href="/part1-6">练习1-6：useState5</a></li>
        <li><a href="/part1-7">练习1-7：unicafe</a></li>
        <li><a href="/part2-1">练习2-1：Map</a></li>
        <li><a href="/part2-2">练习2-2：课程统计</a></li>
        <li><a href="/part2-3">练习2-3：表单</a></li>
      </ul>
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/part1-1" element={<Part11 />} />
        <Route path="/part1-2" element={<Part12 />} />
        <Route path="/part1-3" element={<Part13 />} />
        <Route path="/part1-4" element={<Part14 />} />
        <Route path="/part1-5" element={<Part15 />} />
        <Route path="/part1-6" element={<Part16 />} />
        <Route path="/part1-7" element={<Part17 />} />

        <Route path="/part2-1" element={<Part21 />} />
        <Route path="/part2-2" element={<Part22 />} />
        <Route path="/part2-3" element={<Part23 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
