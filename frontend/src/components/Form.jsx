import { React, useState } from "react";
import Navbar from "./Navbar";
import "./Form.css";
import axios  from "axios";

const Form = () => {
  const [q1, setQ1] = useState("");
  const [q2, setQ2] = useState("");
  const [q3, setQ3] = useState("");
  const [q4, setQ4] = useState("");
  const [q5, setQ5] = useState("");
  const [q6, setQ6] = useState("");
  const [q7, setQ7] = useState("");
  const [q8, setQ8] = useState("");
  const [q9, setQ9] = useState("");
  const [q10, setQ10] = useState("");
  const [q11, setQ11] = useState("");
  const [q12, setQ12] = useState("");
  const [q13, setQ13] = useState("");
  const [q14, setQ14] = useState("");
  const [q15, setQ15] = useState("");
  const user = localStorage.getItem("username");
  const [username, setUsername] = useState(user);

  async function submit() {
    console.log(username);

    try {
      await axios.post("http://localhost:8000/home/form", {
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
        q7,
        q8,
        q9,
        q10,
        q11,
        q12,
        q13,
        q14,
        q15,
        username,
      })
      .then((res) => {
        if (res.data == "done") {
          alert("Form submitted successfully");
        } else {
          alert("Form already submitted");
        }
      })
      .catch((e) => {
        alert("wrong details");
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
  }


  return (
    <div>
      <Navbar />
      <div className="form">
        <form action="">
          <div className="question">
            1.What are your short-term and long-term goals?
          </div>
          <input
            type="q1"
            onChange={(e) => {
              setQ1(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            2.What do you feel are your greatest strengths and weaknesses?
          </div>
          <input
            type="q2"
            onChange={(e) => {
              setQ2(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            3.What aspects of your life do you feel most satisfied with right
            now?
          </div>
          <input
            type="q3"
            onChange={(e) => {
              setQ3(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            4.What aspects of your life do you feel could use improvement?
          </div>
          <input
            type="q4"
            onChange={(e) => {
              setQ4(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            5.Have you faced any obstacles or challenges recently that you're
            struggling to overcome?
          </div>
          <input
            type="q5"
            onChange={(e) => {
              setQ5(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            6.How do you typically handle setbacks or failures?
          </div>
          <input
            type="q6"
            onChange={(e) => {
              setQ6(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            7.What activities or tasks do you find most fulfilling or enjoyable?
          </div>
          <input
            type="q7"
            onChange={(e) => {
              setQ7(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            8.Are there any skills or knowledge areas you're interested in
            developing further?
          </div>
          <input
            type="q8"
            onChange={(e) => {
              setQ8(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            9.How do you currently prioritize your time and energy?
          </div>
          <input
            type="q9"
            onChange={(e) => setQ9(e.target.value)}
            placeholder="Enter your answer"
          />
          <div className="question">
            10.Are there any habits or patterns you'd like to change?
          </div>
          <input
            type="q10"
            onChange={(e) => setQ10(e.target.value)}
            placeholder="Enter your answer"
          />
          <div className="question">
            11.How do you define success for yourself?
          </div>
          <input
            type="q11"
            onChange={(e) => setQ11(e.target.value)}
            placeholder="Enter your answer"
          />
          <div className="question">
            12.What support systems or resources do you currently have in place
            for personal development?
          </div>
          <input
            type="q12"
            onChange={(e) => setQ12(e.target.value)}
            placeholder="Enter your answer"
          />
          <div className="question">
            13.How do you maintain balance between different aspects of your
            life (work, family, hobbies, etc.)?
          </div>
          <input
            type="q13"
            onChange={(e) => setQ13(e.target.value)}
            placeholder="Enter your answer"
          />
          <div className="question">
            14.What motivates you to pursue personal growth and development?
          </div>
          <input
            type="q14"
            onChange={(e) => {
              setQ14(e.target.value);
            }}
            placeholder="Enter your answer"
          />
          <div className="question">
            15.How do you envision your ideal future self?
          </div>
          <input
            type="q15"
            onChange={(e) => {
              setQ15(e.target.value);
            }}
            placeholder="Enter your answer"
          />

          <div className="submit-btn">
            <button type="submit" onClick={submit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
