import React, {useState} from 'react';

const App = () => {
  const [keyword, setKeyword] = useState("") //문자열으로 바꾸어줌 데이터 담는 그릇

  const changeKeyword = () => {
    console.log("키워드입니다.")
      setKeyword("키워드")
  }
    return (
        <div>
            <h1>{keyword}</h1>
                <button onClick={changeKeyword}>키워드 번경</button>
        </div>
    );
};

export default App;