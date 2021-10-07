// A mock function to mimic making an async request for data
export function getCountDelay(amount = 1) {
  return new Promise<{ data: number }>((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: amount });
    }, 2000);
  });
}
