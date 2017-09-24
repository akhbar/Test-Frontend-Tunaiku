"use strict";

function Portfolio(props) {

  var content = props.projects.map(function (project) {
    return React.createElement(
      "div",
      { className: "col-sm-6 col-md-4" },
      React.createElement(
        "a",
        { href: project.link, target: "blank" },
        React.createElement(
          "div",
          { className: "thumbnail" },
          React.createElement("img", { src: project.image, alt: project.title }),
          React.createElement(
            "div",
            { className: "caption" },
            React.createElement(
              "h3",
              null,
              project.title
            ),
            React.createElement(
              "p",
              null,
              project.info
            )
          )
        )
      )
    );
  });

  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      { className: "text-default" },
      " Cupidatat Non Proident Sunt "
    ),
    React.createElement(
      "div",
      { className: "row" },
      content
    )
  );
}

var projects = [
{ link: '#',
image: '../assets/img/section-2-image01.png',
title: 'Excepteur sint occaecat',
info: 'laboris nisi ut aliquip ex ea commodo consequat.rure dolor in reprehenderit in voluptate dolore eu fugiat nulla pariatur.'
},
{ link: '#',
  image: '../assets/img/section-2-image02.png',
  title: 'Nemo enim ipsam',
  info: 'laboris nisi ut aliquip ex ea commodo consequat.rure dolor in reprehenderit in voluptate dolore eu fugiat nulla pariatur.'
},
{ link: '#',
  image: '../assets/img/section-2-image03.png',
  title: 'Quis autem vel eum',
  info: 'laboris nisi ut aliquip ex ea commodo consequat.rure dolor in reprehenderit in voluptate dolore eu fugiat nulla pariatur.'
},
];

ReactDOM.render(React.createElement(Portfolio, { projects: projects }), document.getElementById('portfolio'));