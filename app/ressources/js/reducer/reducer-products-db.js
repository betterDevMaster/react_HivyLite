import React from 'react'
export default function(){
	return fetch('/loadReducerProducts').then((res)=>{
		return res.json().then((json)=>{

			return json
		})
	})
	
}