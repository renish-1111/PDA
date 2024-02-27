import React from "react";
import Navbar from "./Navbar";
import "./Form.css";

const Form = () => {
  return (
    <div>
      <Navbar />
      <div className="form">
        <form action="">
          <div className="question">
            1.What are your short-term and long-term goals?
          </div>
          <input type="q1" placeholder="Enter your answer" />
          <div className="question">
            2.What do you feel are your greatest strengths and weaknesses?
          </div>
          <input type="q2" placeholder="Enter your answer" />
          <div className="question">
            3.What aspects of your life do you feel most satisfied with right now?
          </div>
          <input type="q3" placeholder="Enter your answer" />
          <div className="question">
            4.What aspects of your life do you feel could use improvement?
          </div>
          <input type="q4" placeholder="Enter your answer" />
          <div className="question">
            5.Have you faced any obstacles or challenges recently that you're
            struggling to overcome?
          </div>
          <input type="q5" placeholder="Enter your answer" />
          <div className="question">
            6.How do you typically handle setbacks or failures?

          </div>
          <input type="q6" placeholder="Enter your answer" />
          <div className="question">
            7.What activities or tasks do you find most fulfilling or enjoyable?
          </div>
          <input type="q7" placeholder="Enter your answer" />
          <div className="question">
            8.Are there any skills or knowledge areas you're interested in
            developing further?
          </div>
          <input type="q8" placeholder="Enter your answer" />
          <div className="question">
            9.How do you currently prioritize your time and energy?
          </div>
          <input type="q9" placeholder="Enter your answer" />
          <div className="question">
            10.Are there any habits or patterns you'd like to change?
          </div>
          <input type="q10" placeholder="Enter your answer" />
          <div className="question">
            11.How do you define success for yourself?
          </div>
          <input type="q11" placeholder="Enter your answer" />
          <div className="question">
            12.What support systems or resources do you currently have in place
            for personal development?
          </div>
          <input type="q12" placeholder="Enter your answer" />
          <div className="question">
            13.How do you maintain balance between different aspects of your
            life (work, family, hobbies, etc.)?
          </div>
          <input type="q13" placeholder="Enter your answer" />
          <div className="question">
            14.What motivates you to pursue personal growth and development?
          </div>
          <input type="q14" placeholder="Enter your answer" />
          <div className="question">
            15.How do you envision your ideal future self?
          </div>
          <input type="q15" placeholder="Enter your answer" />

          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
