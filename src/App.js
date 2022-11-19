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
import Part24 from './part2/App2-4'

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

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
        <li><a href="/part2-4">练习2-4：电话簿</a></li>
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

        <Route path="/part2-1" element={<Part21 notes={notes} />} />
        <Route path="/part2-2" element={<Part22 />} />
        <Route path="/part2-3" element={<Part23 notes={notes} />} />
        <Route path="/part2-4" element={<Part24 />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
