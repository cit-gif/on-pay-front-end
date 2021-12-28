import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import { UnmountClosed } from "react-collapse";
import { AiOutlineInfoCircle } from "react-icons/ai";
interface Props {
	isActive: boolean;
	setChoiceFormActive: () => void;
}
export default function LoginForm(props: Props) {
	return (
		<div className='w-full'>
			<div>
				<Typography.Title level={3}>Welcome back</Typography.Title>
			</div>
			<UnmountClosed isOpened={!props.isActive}>
				<div className='py-6 min-h-max'>
					<Button onClick={props.setChoiceFormActive} size='large' className='hover:!bg-slate-600 hover:!text-white' block type='ghost'>
						Login
					</Button>
				</div>
			</UnmountClosed>

			<UnmountClosed isOpened={props.isActive}>
				<div className='min-h-max'>
					<Form layout='vertical' size='large'>
						<Form.Item name='email' label='Email address'>
							<Input />
						</Form.Item>

						<Form.Item
							name='passWord'
							label='Password'
							help={
								<div className='flex items-center gap-3'>
									<AiOutlineInfoCircle className='text-lg' />
									<span>Your password needs to be at least 6 characters.</span>
								</div>
							}
						>
							<Input />
						</Form.Item>
						<Form.Item className='!mt-4'>
							<Button block type='primary' htmlType='submit'>
								Login
							</Button>
						</Form.Item>
					</Form>
				</div>
			</UnmountClosed>
		</div>
	);
}
