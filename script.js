const byteSize = (str) => {
  // write your code here
 const bytes = new Blob([str]).size;
	console.log(bytes);
};

// Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));
