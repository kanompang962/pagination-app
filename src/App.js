
import { useEffect, useState } from 'react';
import './App.css';
import ListFoods from './components/ListFoods';
import MenuData from "./data/MenuData";

function App() {
  const [foodData, setFoodData] = useState(MenuData);//ข้อมูลทั้งหมด
  const [dataInPage, setDataInPage] = useState([]);
  const [page, setPage] = useState(0);

  const pagination = () => {
    const foodPerPage = 5; //แสดงรายการอาหาร 3 รายการใน 1 หน้า
    const pages = Math.ceil(MenuData.length / foodPerPage);

    const newFood = Array.from({ length: pages }, (data, index) => {
      const start = index * foodPerPage; // [0], [3]
      return MenuData.slice(start, start + foodPerPage);
    }); //สร้าง arr ตามจำนวนหน้ามาเก็บข้อมูลแต่ล่ะหน้า
    return newFood;
  };

  const handlePage = (index) => {
    setPage(index);
  };

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setFoodData(paginate[page]);
    // eslint-disable-next-line
  }, [page]);

  return (
    <div className="App">
      <h1>Food Card | Pagination</h1>
      <ListFoods foodData={foodData} />
      <div className='pagination-container'>
        {dataInPage && dataInPage.map((item, index) => (
          <div key={index} className='card-pagination-container'>
            <button className={`${page === index ? 'active' : null}`}
              onClick={() => handlePage(index)}>{index + 1}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
