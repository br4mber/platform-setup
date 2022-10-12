import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import "./styles.css";

registerCoreBlocks();
const App = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Form
        formId="1"
        formObj={{
          blocks: [
            {
              name: "welcome-screen",
              id: "jg1401r",
              attributes: {
                buttonText: "Let's go",
                label: "Start your Campaign today",
                description: "Setting up a Trussle campaign is as easy as answering a few questions!",
                attachment: {
                  //type: "image",
                  //url:
                  //  "https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg"
                }
              }
            },
            {
              name: "short-text",
              id: "kd12edg",
              attributes: {
                required: true,
                label: "Let's start with giving your campaign a name"
              }
            },
            {
              name: "number",
              id: "wer3qdkdb",
              attributes: {
                required: true,
                label: "Great {{field:kdsfkdg}}, can you type your age?"
              }
            },
            {
              name: "long-text",
              id: "m35612edg",
              attributes: {
                required: true,
                label: "Type a brief about yourself!"
              }
            },
            {
              name: "date",
              id: "a213rsew",
              attributes: {
                required: true,
                label: "Please type your birth of date!"
              }
            },
          ],
          settings: {
            animationDirection: "horizontal",
            disableWheelSwiping: false,
            disableNavigationArrows: true,
            disableProgressBar: false
          },
          theme: {
            //font: "Roboto",
            buttonsBgColor: "#2F5061",
            backgroundColor: "#f2efe4",
            logo: {
              src: ""
            },
            questionsColor: "#000",
            answersColor: "#2F5061",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 10,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#2F5061",
            progressBarBgColor: "#f2efe4"
          }
        }}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      />
    </div>
  );
};

export default App;
