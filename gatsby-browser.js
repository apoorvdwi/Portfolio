/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script
      key="si-script"
      dangerouslySetInnerHTML={{
        __html: `
          window.si = window.si || function () {(window.siq = window.siq || []).push(arguments)};
        `,
      }}
    />,
    <script key="si-external-script" defer src="/_vercel/speed-insights/script.js" />,
    <script
      key="va-script"
      dangerouslySetInnerHTML={{
        __html: `
          window.va = window.va || function () {(window.vaq = window.vaq || []).push(arguments)};
        `,
      }}
    />,
    <script key="va-external-script" defer src="/_vercel/insights/script.js" />,
  ]);
};
