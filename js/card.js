//#picSet #pic1
//  초기 변수 선언
let picWidth = 338;
let moveNum = 0;
const totalNum = 5;

// 문자 + 숫자 ----> 연결연산자
// 이미지 위치 셋팅
for (var i = 0; i < totalNum; i++) {
  // i = 0,1,2
  document.getElementById("pic" + i).style.left = picWidth * i + "px";
}

//  동적으로 점 인디케이터 생성 - ul,li
let dotList = document.createElement("ul");
dotList.setAttribute("id", "dotList");
document.getElementById("ImgSet").appendChild(dotList);

for (var i = 0; i < totalNum; i++) {
  var li = document.createElement("li");
  li.setAttribute("id", "li" + i);
  document.getElementById("dotList").appendChild(li);
  document.getElementById("li" + i).onclick = function () {
    // id 를 출력해지는 기능
    moveNum = this.id.substr(2, 1);
    moveFunction();
  };
}
document.getElementById("li" + moveNum).classList.add("active");

//  좌우버튼 셋팅
let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");

prev_btn.innerText = "<";
document.getElementById("ImgSet").appendChild(prev_btn);

let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = ">";
document.getElementById("ImgSet").appendChild(next_btn);

var moveFunction = function () {
  for (var i = 0; i < totalNum; i++) {
    document.getElementById("pic" + i).style.left =
      picWidth * (i - moveNum) + "px";
    document.getElementById("li" + i).classList.remove("active");
  }

  for (var i = 0; i < totalNum; i++) {
    document.getElementById("li" + i).classList.remove("active");
  }
  document.getElementById("li" + moveNum).classList.add("active");
};

// 좌우버튼제어
document.getElementById("prev_btn").onclick = function () {
  if (moveNum > 0) {
    moveNum--;
  } else {
    moveNum = 2;
  }
  moveFunction();
};

document.getElementById("next_btn").onclick = function () {
  if (moveNum < totalNum - 1) {
    moveNum++;
  } else {
    moveNum = 0;
  }
  moveFunction();
};
