// A mock function to mimic making an async request for data
export function getItemDelay(item = 'new') {
  return new Promise<{ data: string }>((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: item });
    }, 2000);
  });
}
