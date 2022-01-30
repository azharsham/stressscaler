let questions = [
  {
    id: 1,
    question: "	Conditions at work are unpleasant or sometimes even unsafe? ",
    type : 2,
  },
  {
    id: 2,
    question: "	I feel that my job is negatively affecting my physical or emotional well being? ",
    type :2,
  },
  {
    id: 3,
    question: "	I have too much work to do and/or too many unreasonable deadlines. ",
    type:2
  },
  {
    id: 4,
    question: "	I find it difficult to express my opinions or feelings about my job conditions to my superiors ",
    type:2
  },
  {
    id: 5,
    question: "	I feel that job pressures interfere with my family or personal life. ",
    type:2
  },
  {
    id: 6,
    question: " I have adequate control or input over my work duties. ",
    type:1
  },
  {
    id: 7,
    question: " I receive appropriate recognition or rewards for good performance.",
    type:1

  },
  {
    id: 8,
    question: " I am able to utilize my skills and talents to the fullest extent at work ",
    type:1
  }

];
// let questions = [
//   {
//     id: 1,
//     question: "	You love connecting with new people all the time? ",
//     type : 1,
//   },
//   {
//     id: 2,
//     question: "	You are more of a player on the ground rather than a spectator? ",
//     type :1,
//   },
// ];

let question_count = 0;
let points = 0;
let vals = 'Test';

window.onload = function() {
  show(question_count);

};

function next() {


  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    location.href = "end.html";
  }

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == "Very Often"  && questions[question_count].type == 1 ) {
    points += 1;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Often"  && questions[question_count].type == 1 ) {
    points += 2;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Sometimes"  && questions[question_count].type == 1 ) {
    points += 3;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Rarely"  && questions[question_count].type == 1 ) {
    points += 4;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Never"  && questions[question_count].type == 1 ) {
    points += 5;
    sessionStorage.setItem("points", points);
  }



  if (user_answer == "Very Often"  && questions[question_count].type == 2 ) {
    points +=5;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Often"  && questions[question_count].type == 2 ) {
    points += 4;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Sometimes"  && questions[question_count].type == 2 ) {
    points += 3;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Rarely"  && questions[question_count].type == 2 ) {
    points += 2;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Never"  && questions[question_count].type == 2 ) {
    points += 1;
    sessionStorage.setItem("points", points);
  }



  if (user_answer == "Very Often"  && questions[question_count].type == 3 ) {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Likely"  && questions[question_count].type == 3 ) {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Rarely"  && questions[question_count].type == 3 ) {
    points += 0;
    sessionStorage.setItem("points", points);
  }
  if (user_answer == "Never"  && questions[question_count].type == 3 ) {
    points += 0;
    sessionStorage.setItem("points", points);
  }

 console.log(points);
  if(points <= 15)
  {
  vals = "Zero Stress";
  sessionStorage.setItem("vals", vals);
  }
  if((points >= 16) && (points <= 20))
  {
  vals = "Mild Stress";
  sessionStorage.setItem("vals", vals);
  }
  if((points >= 21) && (points <= 25))
  {
  vals = "Moderate Stress";
  sessionStorage.setItem("vals", vals);
  }
  if((points >= 26) && (points <= 30))
  {
  vals = "Severe Stress";
  sessionStorage.setItem("vals", vals);
  }
  if((points >= 31) && (points <= 40))
  {
  vals = "Dangerous Stress";
  sessionStorage.setItem("vals", vals);
  }

  // if (user_answer == questions[question_count].answer) {
  //   points += 10;
  //   sessionStorage.setItem("points", points);
  // }

question_count++;
show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth,fifth] = [
    "Very Often",
    "Often",
    "Sometimes",
    "Rarely",
    "Never"
  ]

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group" style ="font-size: 14px;">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
  <li class="option">${fifth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
