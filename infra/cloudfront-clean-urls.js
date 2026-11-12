/**
 * CloudFront Function — viewer request
 * ------------------------------------
 * Astro is configured with build.format = 'directory', which emits
 *   /blog/my-post/index.html
 * S3 (as a REST origin) will not resolve a directory to index.html on its own,
 * so without this function every clean URL returns 403 or 404.
 *
 * This rewrites:
 *   /blog/my-post      -> /blog/my-post/index.html
 *   /blog/my-post/     -> /blog/my-post/index.html
 *   /                  -> /index.html
 * and leaves anything with a file extension untouched, so the legacy
 * hand-written pages (/what-is-ai-delivery-governance.html) still work.
 *
 * DEPLOY:
 *   CloudFront console -> Functions -> Create function (runtime: cloudfront-js-2.0)
 *   Paste this, Publish, then attach to your distribution's default behaviour
 *   under "Viewer request".
 */
function handler(event) {
  var request = event.request;
  var uri = request.uri;

  // Already a file (.html, .svg, .png, .xml, .txt ...) — leave it alone.
  var lastSegment = uri.substring(uri.lastIndexOf('/') + 1);
  if (lastSegment.indexOf('.') !== -1) {
    return request;
  }

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else {
    request.uri = uri + '/index.html';
  }

  return request;
}
