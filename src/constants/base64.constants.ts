export const getBase64 = (file: File) => {
  return new Promise((resolve, reject) => {
    try {
      if (!(file instanceof Blob)) {
        reject(new Error("Invalid file type. Expected a Blob."));
        return;
      }
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);

      if (file.type === "application/octet-stream") {

        const reader = new FileReader();
        reader.onload = () => {
          const base64 = btoa(new Uint8Array(reader.result as ArrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
          resolve(`data:${file.type};base64,${base64}`);
        };
        reader.readAsArrayBuffer(file);
      } else {
        reader.readAsDataURL(file);
      }
    } catch (error) {
      reject(error);
    }
  });
};




export const getImageSizeFromBase64 = (base64: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = function () {
      const sizeInBytes = base64.length * 0.75; // Approximate size in bytes
      const sizeInKB = sizeInBytes / 1024;
      resolve(sizeInKB);
    };

    img.onerror = function (error) {
      reject(error);
    };

    img.src = base64;
  });
};

