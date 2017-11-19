export const swap = ( arr , i , j ) => {
	let temp = arr[ i ];
	arr[ i ] = arr[ j ];
	arr[ j ] = temp;
	return arr;
};

export const InsertionSort = ( arr: number[] ) =>
	arr.map(( val , i ) => {
		for( let j = i + 1; j > 0; j-- ) {
			if( arr[ j ] < arr[ j - 1 ] ) {
				swap(arr , j , j - 1);
			} else {
				break;
			}
		}
	});
