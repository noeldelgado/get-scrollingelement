export default function () {
  if ('scrollingElement' in document) {
    return document.scrollingElement;
  }

  const html = document.documentElement;
  const start = html.scrollTop;
  let end;

  html.scrollTop = start + 1;

  end = html.scrollTop;

  html.scrollTop = start;

  if (end > start) {
    return html;
  }

  return document.body;
}
