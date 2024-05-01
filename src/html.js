import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  const inlineScript = `
    window.si = window.si || function () {(window.siq = window.siq || []).push(arguments)};
    window.va = window.va || function () {(window.vaq = window.vaq || []).push(arguments)};
  `;
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {props.headComponents}
        <script dangerouslySetInnerHTML={{ __html: inlineScript }} />
        <script defer src="/_vercel/speed-insights/script.js"></script>
        <script defer src="/_vercel/insights/script.js"></script>
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
