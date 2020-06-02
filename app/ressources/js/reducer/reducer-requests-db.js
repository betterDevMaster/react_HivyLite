import React from 'react'
export default function(){
	return fetch('/loadReducerRequest').then((res)=>{
		return res.json().then((json)=>{
		
			return json
		})
	})
	
}