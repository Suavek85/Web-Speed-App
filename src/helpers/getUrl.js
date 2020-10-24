import apikey from './apikey'

const base = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?`
const key = apikey()

export default function (urlInput) {
  return `${ base }url=${ urlInput }&key=${ key }`
}