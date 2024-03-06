const message = []

export async function post(data) {
  const res = message.push(data);
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(res), 2000)
  } )
}