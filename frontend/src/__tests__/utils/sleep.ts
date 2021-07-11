function sleep(milliseconds = 200) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, milliseconds)
  })
}

export default sleep
