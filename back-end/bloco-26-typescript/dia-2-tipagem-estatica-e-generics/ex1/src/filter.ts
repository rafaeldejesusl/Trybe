type callback<T> = (element: T, index?: number, array?: T[]) => boolean;

function myFilter<T>(array: T[], funcao: callback<T>): T[] {
  const filtered: T[] = [];

  for(let i = 0; i < array.length; i++) {
    if (funcao(array[i], i, array)) filtered.push(array[i]);
  }

  return filtered;
}

console.log(myFilter([0, 1, 2, 3, 4], (item, index, array) => item < 3 ));
