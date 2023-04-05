const bufferSize = 5
let read:number = 0
let write:number =0 
let arr: number[] = new Array<number>(bufferSize);
let isOver = false
export const put = (input: number) => {
    arr[write] = input;
    if(write >= bufferSize){
      write = 0
      isOver = true
    }else{
      write++;
    }
  };
  
  export const get = () => {
    if(isOver){
      read ++;
      isOver = false
    }
    let temread = arr[read];
    return temread;
  };
