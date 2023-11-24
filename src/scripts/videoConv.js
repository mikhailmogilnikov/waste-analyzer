const getFullTime = (data) => new Promise((res, rej) => {
    const video = document.createElement('video');
    const blob = new Blob([data], { type: 'video/mp4' });
    const videoURL = URL.createObjectURL(blob);
    video.src = videoURL;
  
    video.addEventListener('loadedmetadata', async () => {
      res(video.duration);
    });
  
    video.addEventListener('error', (error) => {
      rej(error);
    });
  })
  
  export const videoConv = (fileContents) => new Promise((resolve) => {
    getFullTime(fileContents).then(fullTime => {
      // console.log({fullTime});
      const startTime = 3 * 100 / fullTime;
      const endTime = 10 * 100 / fullTime;
      const videoData = new Uint8Array(fileContents);
  
      console.log("log", {
        startTime,
        endTime,
        fullTime
      })
  
      const convFile = new Blob([videoData], { type: 'video/mp4' });
      resolve(convFile);
    })
  })
  
  
  export const multiUploader = (acceptedFiles) => new Promise((resMulti, rejMulti) => {
    if (!acceptedFiles.length) resMulti([]);
    const promises = [];
    for (const file of acceptedFiles) {
      const promise = new Promise((resolve) => {
        const reader = new FileReader();
  
        reader.onload = async (e) => {
          const fileData = e.target.result;
          const blobData = new Blob([fileData], { type: 'video/mp4' })
          resolve({ name: file?.name, file: blobData });
        };
  
        reader.readAsArrayBuffer(file);
      });
      promises.push(promise);
    }
    try {
      // Ждем завершения всех промисов
      Promise.all(promises).then(result => resMulti(result));
    } catch (error) {
      console.error(error);
      rejMulti(error);
    }
  })
  