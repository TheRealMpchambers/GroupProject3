import React, { Component } from 'react';
import { render } from 'react-dom';

import * as Survey from 'survey-react';
import 'survey-react/survey.css';

class App extends Component {
  componentWillMount() {    
    Survey.Survey.cssType = "bootstrap";
    Survey.defaultBootstrapCss.navigationButton = "btn btn-green";
  }

  render() {    
    var json = { title: "Product Feedback Survey Example", showProgressBar: "top", pages: [
        {questions: [
            { type: "matrix", name: "Quality", title: "Please indicate if you agree or disagree with the following statements",
                columns: [{ value: 1, text: "Strongly Disagree" },
                    { value: 2, text: "Disagree" },
                    { value: 3, text: "Neutral" },
                    { value: 4, text: "Agree" },
                    { value: 5, text: "Strongly Agree" }],
                rows: [{ value: "use", text: "Application is easy to use" },
                    { value: "Text directions are clear", text: "Text directions are clear" },
                    { value: "Map directions are clear", text: "Map directions are clear" },
                    { value: "Virtual directions are clear", text: "Virtual directions are clear" }]},

            { type: "rating", name: "satisfaction", title: "How satisfied are you with the Web App?",
                mininumRateDescription: "Not Satisfied", maximumRateDescription: "Completely satisfied" },

            { type: "rating", name: "recommend friends", visibleIf: "{satisfaction} > 3",
                title: "How likely are you to recommend the Product to a friend or co-worker?",
                mininumRateDescription: "Will not recommend", maximumRateDescription: "I will recommend" },

            { type: "text", name: "email",
                title: "Thank you for taking our survey. Your survey is almost complete, please enter your email address in the box below if you wish to participate in our drawing, then press the 'Submit' button."}
        ]}
    ]};

    var model = new Survey.Model(json);    
    return (
      <Survey.Survey model={model}/>
    );
  }
}

render(<App />, document.getElementById('root'));