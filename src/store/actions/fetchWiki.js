import axios from 'axios'


export const getWikies = searchValue => async dispatch => {
	axios
	.get(`https://en.wikipedia.org/w/api.php?action=opensearch&search=${searchValue}&format=json&origin=*&limit=10`)
  .then((result) =>{
		!result.data.error
		? dispatch(sendResults(result.data))
		: dispatch(clearResults())
	})
	.catch((error) =>{
		console.log(error)
	})
}

const sendResults =(data) =>{
	return {
		type:'SEND',
		data,
	}
}

const clearResults = () =>{
	return {
		type:'CLEAR',

	}
}