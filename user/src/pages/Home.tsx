import React from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hook";

export default function Home() {
	const isLogged = useAppSelector((state) => state.user.isLogged);
	const firstName = useAppSelector((state) => state.user.info.firstName);
	if (!isLogged) {
		return (
			<div className='text-2xl font-bold'>
				you need{" "}
				<Link to='/authenticate?view=login' className='text-violet-600'>
					login
				</Link>
				<span className='mx-4'>or</span>
				<Link to='/authenticate?view=register' className='text-violet-600'>
					register
				</Link>
			</div>
		);
	}
	return <div className='text-2xl font-bold'>hello {firstName}</div>;
}
