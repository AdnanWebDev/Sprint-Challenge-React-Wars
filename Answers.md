# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.
    
    React JS is a framework and library of JS that allows developers to create website that can be dynamic when there is change in data, user interaction, and content updates.
    It allows us to use some powerful feature such as React State that allows to store information and can be used immediately to update the website. Unlike traditional HTML, CSS and JS, you will have to manually update by rebuilding the whichever part. 

1. What does it mean to think in react?

        React is front-end technology, so the idea to a developer to create an experience that allows user to interact in meaningful manner. React allows developers to create immersive web pages that can figure dynamic content.

1. Describe state.

    State is simply data, this can be anything form of data: string, integer, object, array

1. Describe props.

    Props aka properties of components. A developer can be build simple component to render a header but that header may need information updated, in order to pass the information to the header. We first create a state to hold the information and pass to relevant header component by creating properties for that same component. This allows components to be easily reusable.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are observance of dynamic content. Such content could be like fetching new data every day from API, or whenever user interacts with website, content is changed. In order to adapt the state (information) and components' props, we use React Effect which allows us to update the content easily without the need to rebuild the entire website from scratch as well. React Effect allows us to update state and in return also update props, everything is then dynamically updated.
