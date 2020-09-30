export default function ({ $axios }) {
  $axios.onRequest((config) => {
    // eslint-disable-next-line no-console
    console.log(`Making a request to ${config.url}`)
  })
}
