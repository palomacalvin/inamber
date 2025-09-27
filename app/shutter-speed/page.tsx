// app/tracks/intro/page.tsx
"use client";

import { useState } from "react";
import { quizQuestions, resultTypes } from "../data/quiz_data";
import styles from "../../styles/quiz.module.css"; // ✅ Adjusted import path if needed

export default function IntroTrackPage() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length !== quizQuestions.length) {
      alert("Please answer all questions.");
      return;
    }
    setShowResult(true);
  };

  const calculateResult = () => {
  const counts: Record<string, number> = {};

  Object.values(answers).forEach((val) => {
    counts[val] = (counts[val] || 0) + 1;
  });

  const mostCommon = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];

  if (!mostCommon) return null;

  const resultKey = mostCommon[0];
  const resultData = resultTypes[resultKey as keyof typeof resultTypes];

  return resultData ?? null;
};



  return (
    
    <div className={styles.trackPage}>

      <h1 className={styles.title}>Who are you? What are you? Where are you?</h1>

      {!showResult ? (
        <>
          {quizQuestions.map((q) => (
            <div key={q.id} className={styles.questionBlock}>
              <h2 className={styles.question}>{q.question}</h2>
              <div className={styles.options}>
                {q.imageOptions.map((opt) => (
                  <div
                    key={opt.value}
                    className={`${styles.option} ${
                      answers[q.id] === opt.value ? styles.selected : ""
                    }`}
                    onClick={() => handleAnswer(q.id, opt.value)}
                      >
                    <img
                      src={opt.img}
                      alt={opt.label}
                      className={styles.optionImage}
                    />
                    <p className={styles.optionLabel}>{opt.label}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button className={styles.submitButton} onClick={handleSubmit}>
            Submit
          </button>
        </>
      ) : (
        <div className={styles.result}>

          {(() => {
            const result = calculateResult();
            if (!result) return <p>Unknown result.</p>;

            return (
              <>
                <img
                  src={result.img}
                  alt="Result"
                  className={styles.resultImage}
                />
                <p className={styles.result}>{result.text}</p>


                <p className={styles.extra}>Or are you?<br /><br />
                  Are you insect or are you human? Or are you something
                  else entirely?
                  <br /><br />
                  Are you the product of all that came before and all that is to come?
                  <br /><br />
                  Are you separate from everything around you or are you
                  a part of a never-ending web?
                  <br /><br />
                  Are you alone in your body or are you united with everything that
                  is by the physical plane?
                  <br /><br />
                  Can you be captured in a single frame or
                  are you preserved in time that is really space?
                </p>

                <div style={{ marginTop: "2rem" }}>
                  {/* <iframe
                    width="100%"
                    height="500"
                    src="https://youtu.be/B2LAIA9tWzM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  /> */}

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <iframe width="700" height="394" src="https://www.youtube.com/embed/B2LAIA9tWzM?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </div>

                </div>

              </>

            );
          })()}

        </div>
      )}

    </div>
  );
}
