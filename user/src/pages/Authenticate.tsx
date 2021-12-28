import React, { useState } from "react";
import { GrClose as IconClose, GrLanguage } from "react-icons/gr";
import { Link, useSearchParams } from "react-router-dom";
// import { Collapse } from "react-collapse";
import LogoText from "../components/LogoText";
import LogoIcon from "../components/LogoIcon";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import { Button, Modal, Radio, RadioChangeEvent, Space, Spin, Typography } from "antd";

const footerItems = [
	{
		text: "Privacy Notice",
		href: "/",
	},
	{
		text: "Terms of use",
		href: "/",
	},
	{
		text: "Legal notice",
		href: "/",
	},
];

export default function Authenticate() {
	const [spinning, setSpinning] = useState<boolean>(false);

	// get query
	const [searchParams, setSearchParams] = useSearchParams();
	const isViewRegister = searchParams.get("view") === "register";

	const handleChoiceFormActive = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | null) => {
		e?.preventDefault();
		// hiển thị form bằng query
		if (isViewRegister) {
			setSearchParams({
				view: "login",
			});
		} else {
			setSearchParams({
				view: "register",
			});
		}
	};

	const toggleSpinning = () => {
		setSpinning((prev) => !prev);
	};
	// language
	const [languageState, setLanguageState] = useState([
		{
			text: "English",
			value: "english",
			selected: true,
		},
		{
			text: "Deutsch",
			value: "deutsch",
			selected: false,
		},
	]);
	const getLanguageSelected = languageState.find((lang) => lang.selected);
	const [languageModal, setLanguageModal] = useState({
		visible: false,
	});
	const handleOpenModal = () => {
		setLanguageModal({ visible: true });
	};
	const handleCloseModal = () => {
		setLanguageModal({ visible: false });
	};
	const handleChageLanguage = (e: RadioChangeEvent) => {
		// khi thay đổi ngôn ngữ nhưng chưa lưu
	};
	const handleSaveLanguage = () => {
		// khi click lưu thay đổi ngôn ngữ
	};
	return (
		<Spin size='large' spinning={spinning}>
			{/* loading */}
			<div>
				<header className='w-full'>
					<div className='w-full lg:hidden border-solid border-0 border-b'>
						<div className='max-w-5xl mx-auto flex flex-nowrap '>
							<Link to='/' className='flex items-center justify-center p-4 border-solid border-0 border-r'>
								<IconClose />
							</Link>
							<div className='flex items-center justify-between flex-grow p-4'>
								<span className='font-bold'>{isViewRegister ? "Register" : "Login"}</span>
								{/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
								<a href='#' className=' relative font-bold text-violet-600 hover:text-violet-600 hover:underline' onClick={handleChoiceFormActive}>
									{!isViewRegister ? "Register" : "Login"}
								</a>
							</div>
						</div>
					</div>

					<div className='p-4 max-w-5xl mx-auto flex items-center justify-between'>
						<LogoText className='w-36' />
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a onClick={handleOpenModal}>
							<div className='flex flex-col items-center justify-center'>
								<GrLanguage className='text-3xl' />
								<span className='text-violet-600'>{getLanguageSelected?.text}</span>
							</div>
						</a>
						<Modal centered visible={languageModal.visible} onCancel={handleCloseModal} footer={null}>
							<Space direction='vertical' size='large'>
								<Typography.Title level={2}>Which language do you prefer to use?</Typography.Title>
								<Radio.Group onChange={handleChageLanguage}>
									<Space size='large' direction='vertical'>
										{languageState.map((item, index) => (
											<Radio key={index} value={item.value}>
												{item.text}
											</Radio>
										))}
									</Space>
								</Radio.Group>
								<Button onClick={handleSaveLanguage} block type='primary'>
									Save
								</Button>
							</Space>
						</Modal>
					</div>
				</header>
				<main>
					<div className='px-4 max-w-xl mx-auto md:max-w-lg'>
						{/* login */}

						<LoginForm
							isActive={!isViewRegister}
							setChoiceFormActive={() => {
								handleChoiceFormActive(null);
							}}
						/>
						{/* hr */}
						<div className='w-full my-8 border-0 border-solid border-b'></div>
						{/* register */}
						<RegisterForm
							toggleSpinning={toggleSpinning}
							isActive={isViewRegister}
							setChoiceFormActive={() => {
								handleChoiceFormActive(null);
							}}
						/>
					</div>
				</main>
				<footer className='p-6'>
					<ul className='list-none flex item-center justify-center gap-8'>
						{footerItems.map((item, key) => (
							<li key={key}>
								<Link className='text-gray-700 font-semibold hover:text-gray-700 hover:underline' to={item.href}>
									{item.text}
								</Link>
							</li>
						))}
					</ul>
					<div className='text-center p-10 pt-6'>
						<Link to='/' className='text-primary hover:text-primary text-2xl '>
							<LogoIcon />
						</Link>
					</div>
				</footer>
			</div>
		</Spin>
	);
}
