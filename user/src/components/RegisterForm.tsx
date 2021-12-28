import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select, Typography, message } from "antd";
import { UnmountClosed } from "react-collapse";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useMutation } from "react-query";
import { createUser } from "../service/user/userService";
import { userInterface } from "../service/user/user.interface";
import { useForm } from "antd/lib/form/Form";
import { FieldData } from "rc-field-form/es/interface";

import { useAppDispatch, useAppSelector } from "../app/hook";
import { userAction } from "../reducer/userReduce";
interface Props {
	isActive: boolean;
	setChoiceFormActive: () => void;
	toggleSpinning: () => void;
}
export default function RegisterForm(props: Props) {
	const isLogged = useAppSelector((state) => state.user.isLogged);
	const { toggleSpinning } = props;
	const [agreement, setAgreement] = useState(false);
	const navigate = useNavigate();
	const [form] = useForm();
	const dispatch = useAppDispatch();

	// create User
	const { mutate } = useMutation(createUser, {
		onSuccess: (res) => {
			dispatch(
				userAction.setUserWhenLogged({
					firstName: res.data.results.first_name,
					lastName: res.data.results.last_name,
					email: res.data.results.email,
					token: "",
					id: res.data.results.id,
				})
			);
			toggleSpinning();
			message.success(res.data.message);
			navigate("/");
		},
		onError: (error: any) => {
			toggleSpinning();
			if (error.response) {
				const messageErrorObj = error.response?.message || {};
				//lấy key error response
				const arrayKeyError = Object.keys(messageErrorObj);
				// set field từ response
				const arrayFieldError: FieldData[] = arrayKeyError.map((key) => ({
					name: key,
					validating: false,
					errors: messageErrorObj[key],
				}));
				form.setFields(arrayFieldError);
			}
		},
	});
	const handleSubmit = async (value: any) => {
		// submit form
		try {
			toggleSpinning();
			const newUer: userInterface = {
				first_name: value.first_name,
				last_name: value.last_name,
				email: value.email,
				gender: value.gender,

				password: value.password,
				password_confirmation: value.password,
			};
			mutate(newUer);
		} catch (error) {}
	};
	if (isLogged) {
		return <Navigate to='/' />;
	}
	return (
		<div className='w-full'>
			<div>
				<Typography.Title level={3}>I'm new here</Typography.Title>
			</div>
			<UnmountClosed isOpened={!props.isActive}>
				<div className='py-6 min-h-max'>
					<Button onClick={props.setChoiceFormActive} size='large' className='hover:!bg-slate-600 hover:!text-white' block type='ghost'>
						Register
					</Button>
				</div>
			</UnmountClosed>

			<UnmountClosed isOpened={props.isActive}>
				<div className='min-h-max'>
					<Form form={form} layout='vertical' size='large' onFinish={handleSubmit}>
						<Form.Item
							rules={[
								{ required: true, message: "Please input your First Name!" },
								{ type: "string", warningOnly: true },
								{
									min: 2,
									message: "First Name must have 2 characters!",
								},
								{
									max: 50,
									message: "First Name up to 50 characters!",
								},
							]}
							label='First Name'
							name='first_name'
						>
							<Input />
						</Form.Item>
						<Form.Item
							rules={[
								{ required: true, message: "Please input your Last name!" },
								{ type: "string", warningOnly: true },
								{
									min: 2,
									message: "Last name must have 2 characters!",
								},
								{
									max: 50,
									message: "Last name up to 50 characters!",
								},
							]}
							name='last_name'
							label='Last name'
						>
							<Input />
						</Form.Item>
						<Form.Item
							rules={[
								{
									required: true,
									message: "Please input your E-mail!",
								},
								{
									type: "email",
									message: "The input is not valid E-mail!",
								},
							]}
							name='email'
							label='Email address'
						>
							<Input />
						</Form.Item>

						<Form.Item rules={[{ required: true, message: "Please select your gender!" }]} name='gender' label='Gender'>
							{/* <Radio.Group>
								<Radio value='male'>Male</Radio>
								<Radio value='female'>Female</Radio>
							</Radio.Group> */}
							<Select placeholder='Choose your gender'>
								<Select.Option value='male'>Male</Select.Option>
								<Select.Option value='female'>Female</Select.Option>
							</Select>
						</Form.Item>
						<Form.Item
							name='password'
							label='Password'
							rules={[
								{
									required: true,
									message: "Please input your password!",
								},
								{
									min: 6,
									message: "Password must have 6 characters!",
								},
								{
									max: 64,
									message: "Password up to 64 characters!",
								},
							]}
							// help={
							// 	<div className='flex items-center gap-3'>
							// 		<AiOutlineInfoCircle className='text-lg' />
							// 		<span>Your password needs to be at least 6 characters.</span>
							// 	</div>
							// }
						>
							<Input.Password />
						</Form.Item>

						<Form.Item className='!mt-4'>
							<Button disabled={!agreement} block type='primary' htmlType='submit'>
								Register
							</Button>
						</Form.Item>
						<Form.Item name='agreement'>
							<Checkbox
								checked={agreement}
								onChange={(e) => {
									setAgreement(e.target.checked);
								}}
							>
								By registering for an account, you agree to our{" "}
								<Link to='/' className='text-violet-600 font-bold'>
									Terms of Use
								</Link>
								. Please read our{" "}
								<Link to='/' className='text-violet-600 font-bold'>
									Privacy Notice
								</Link>
								.
							</Checkbox>
						</Form.Item>
					</Form>
				</div>
			</UnmountClosed>
		</div>
	);
}
