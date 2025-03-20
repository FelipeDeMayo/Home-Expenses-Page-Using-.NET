const px2vw = (size: number, width: number = 1440): string => {
    return `${(size / width) * 100}vw`;
  };
export default px2vw;
  