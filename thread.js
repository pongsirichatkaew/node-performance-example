const { Worker, workerData, isMainThread } = require('worker_threads');
// All of this happens in one process id
// To not Create worker until machine cant create worker
if (isMainThread) {
  console.log(`MathThread! Process ID: ${process.pid}`);
  new Worker(__filename, {
    workerData: [7, 6, 2, 3],
  });
  new Worker(__filename, {
    workerData: [1, 3, 4, 3],
  });
} else {
  console.log(`Worker! Process ID: ${process.pid}`);
  console.log(`${workerData} sorted is ${workerData.sort()}`);
}
