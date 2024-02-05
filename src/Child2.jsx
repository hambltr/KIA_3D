import React, { useState, useEffect } from "react";
import "./Child2.css";

function Child2({ changeImage }) {
  //URL 조작
  const [count, setCount] = useState(1);
  //차량 Trim (옵션) 조작
  const [trim] = useState([    
    { id: 1, URLname: 'air', name: 'EV 전기차 에어 2WD A/T 7인승'  },
    { id: 2, URLname: 'earth', name: 'EV 전기차 어스 2WD A/T 7인승' },
    { id: 3, URLname: 'gt-line', name: 'EV 전기차 GT-line 4WD A/T 7인승' }
  ]);

  //서버에서 받아온 차량 정보라고 가정하고 state 값을 지정하고 작업하였습니다.
  const [color] = useState([
  {
    id: 1, 
    urlColor: 'swp', 
    name: '스노우 화이트 펄', 
    backgroundColor: '#C9C9CB' 
  },
  { 
    id: 2, 
    urlColor: 'ism', 
    name: '아이보리 매트 실버', 
    backgroundColor: '#b1b1ac' 
  },
  { 
    id: 3, 
    urlColor: 'dfg', 
    name: '페블 그레이', 
    backgroundColor: '#85848a' 
  },
  { 
    id: 4, 
    urlColor: 'ieg', 
    name: '아이스버그 그린', 
    backgroundColor: '#727e7c' 
  },
  { 
    id: 5, 
    urlColor: 'p2m', 
    name: '판테라 메탈', 
    backgroundColor: '#363a40' 
  },
  { 
    id: 6, 
    urlColor: 'abp', 
    name: '오로라 블랙 펄', 
    backgroundColor: '#000000' 
  },
  { 
    id: 7, 
    urlColor: 'obg', 
    name: '오션 블루', 
    backgroundColor: '#0c456c' 
  },
  { 
    id: 8, 
    urlColor: 'obm', 
    name: '오션 매트 블루', 
    backgroundColor: '#004e75' 
  },
  { 
    id: 9, 
    urlColor: 'c7r', 
    name: '플레어 레드', 
    backgroundColor: '#75111d' 
  }
  ]);

  //버튼에서 선택한 색상 정보
  const [selectedColorName, setSelectedColorName] = useState(color[0].name);
  const [selectedColorURL, setSelectedColorURL] = useState(color[0].urlColor);
  const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(color[0].backgroundColor);

  //버튼에서 선택한 옵션 정보(trim)
  const [selectedTrimList, setSelectedTrimList] = useState(false);
  const [selectedTrim, setSelectedTrim] = useState(trim[0].name);
  const [selectedTrimURL,setSelectedTrimURL] = useState(trim[0].URLname);

  //url 숫자 부분에 1이 아닌 01 ~ 09까지로 나타내주는 함수임 걍 1들어가면 url이 달라서 에러남
  //10부터는 그냥 표시해주는 좋은 친구
  const formattedCount = count < 10 ? `0${count}` : count;

  //마우스 드래그 로직
  const [dragging, setDragging] = useState(false);
  // 이동 시작 지점의 X 좌표를 저장하는 상태 변수
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    changeImage(
      `https://www.kia.com/content/dam/kwp/kr/ko/configurator/ev9/trim/exterior/ev9-${selectedTrimURL}/${selectedColorURL}/${selectedColorURL}_${formattedCount}.png`
    );
  }, [changeImage, formattedCount, selectedColorName, selectedColorURL, selectedTrimList, selectedTrimURL]);

  // const turnRight = () => {
  //   setCount((prevCount) => (prevCount < 72 ? prevCount + 1 : 1));
  // };

  // const turnLeft = () => {
  //   setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 72));
  // };

  const btnChangeColor = (colorName, colorURL, colorBg) => {
    setSelectedColorName(colorName);
    setSelectedColorURL(colorURL);
    setSelectedBackgroundColor(colorBg);
  };

  const showUlBox = () => {
    setSelectedTrimList(!selectedTrimList);
  };

  const selectTrim = (selTrim, selTrimURL) => {
    setSelectedTrim(selTrim);
    setSelectedTrimList(false);
    setSelectedTrimURL(selTrimURL)
  }

  // 마우스가 클릭되었을 때 이벤트 처리
const handleMouseDown = (event) => {
  // 드래그 시작을 알리는 상태 변수를 true로 설정
  setDragging(true);
  // 이벤트가 일어난 위치의 X 좌표를 저장
  setStartX(event.clientX);
};

// 마우스 이동 이벤트 처리
const handleMouseMove = (event) => {
  // dragging 상태가 true일 때만 이동 이벤트를 처리
  if (dragging) {
    // 이동한 거리 계산
    const movedX = event.clientX - startX;

    // 1 이상 오른쪽으로 이동한 경우 url의 숫자를 감소시킴
    if (movedX > 1) {
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 72));
      // startX를 현재 위치로 업데이트하여 다음 이동 거리를 계산할 때 사용
      setStartX(event.clientX);
    }
    // 1 이상 왼쪽으로 이동한 경우 url 숫자를 증가시킴
    else if (movedX < -1) {
      setCount((prevCount) => (prevCount < 72 ? prevCount + 1 : 1));
      // startX를 현재 위치로 업데이트하여 다음 이동 거리를 계산할 때 사용
      setStartX(event.clientX);
    }
  }
};

// 마우스 클릭 해제 이벤트 처리
const handleMouseUp = () => {
  // 드래그 종료를 알리는 상태 변수를 false로 설정
  setDragging(false);
};



  return (
    <>
      <div className="showTime"   
        //이벤트 함수 등록
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></div>
      {/* <div>
        <button className="custom_btn R_btn" onClick={turnRight}>
          &lt;
        </button>
        <button className="custom_btn" onClick={turnLeft}>
          &gt;
        </button>
      </div> */}
      <div className="bg" style={{ backgroundColor: selectedBackgroundColor }}></div>
      <div className="trim_select_box">
          {/* 처음에 보여질 기초값 */}
          <button onClick={()=>showUlBox()}>{selectedTrim}</button> 
      </div>
      {
        selectedTrimList &&
        <ul className="trim_list">
          {
            trim.map(function(a,i){
              return(
                <li key={i}>
                  <button onClick={()=>selectTrim(trim[i].name, trim[i].URLname)}>{trim[i].name}</button>
                </li>
              )
            })
          }
        </ul>
      }
      <div className="select_box">
        <div className="color_name">
          <p>{selectedColorName}</p>
        </div>
        <div className="color_palette">
          {
            color.map((a,i)=>{
              const colorCode = color[i].urlColor
              const buttonImg = `https://www.kia.com/content/dam/kwp/kr/ko/configurator/ev9/colorchip/exterior/${colorCode}.png`
              return (
                <button key={i} onClick={() => btnChangeColor(color[i].name, color[i].urlColor, color[i].backgroundColor)}>
                  <img src={buttonImg} alt="button_colors"/>
                </button>
              );
            })
          }
        </div>
      </div>
      <p>본 차량의 이미지는 실제와 다를 수 있습니다.</p>
    </>
  );
}

export default Child2;
