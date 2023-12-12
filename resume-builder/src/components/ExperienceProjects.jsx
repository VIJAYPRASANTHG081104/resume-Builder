import React, { useState, useEffect, useRef } from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Select } from 'antd';
import ProfileInfo from './profileInfo';
import proData from './data/porfolio.json'

const ExperienceProjects = () => {
    const user = JSON.parse(localStorage.getItem('resume-user'))
    const { TextArea } = Input;
    const maxtext = 400

    const onChange = (value) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value) => {
        console.log('search:', value);
      };

    const filterOption = (input, option) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    // useEffect(()=>{
    //     for(var j=0;j<user.Experience.length;j++){
    //         var h = user.Experience[j].Rolework.length
    //     }
    //     console.log(text)
    // },[])
    const proOptions = proData.sort()
    return (
        <div>
            <ProfileInfo />
            <h5 className='profiletitle'><b>Experience</b></h5>
            <hr />
            <Form.List name="Experience">

                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Company']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Company',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Company" />
                                        </Form.Item>
                                    </div>

                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Years']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Years',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Years" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Place']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Place',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Place" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'YearRange']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing first name',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-3'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'jobRole']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Role',
                                                },
                                            ]}
                                        >
                                             <Select
                                                showSearch
                                                placeholder="Role"
                                                optionFilterProp="children"
                                                onChange={onChange}
                                                onSearch={onSearch}
                                                filterOption={filterOption}
                                                options={proOptions}
                                            />
                                        </Form.Item>
                                    </div>
                                    <div className="col-md-7">
                                        <Form.Item {...restField}
                                            name={[name, 'Rolework']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Work',
                                                },
                                            ]}
                                        >
                                            <TextArea maxLength={400} placeholder='Description' className='text' />
                                        </Form.Item>
                                        {/* <small className='words'>remaining words{maxtext - text4}</small> */}
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ size: 40, color: '' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}</div>


                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Experience
                            </Button>
                        </Form.Item>
                    </>
                )}

            </Form.List>
            <h5 className='profiletitle'><b>Projects</b></h5>
            <hr />
            <Form.List name="Projects">

                {(fields, { add, remove }) => (
                    <>
                        <div className='row'>
                            {fields.map(({ key, name, ...restField }) => (
                                <>
                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Title']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Title',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Title" />
                                        </Form.Item>
                                    </div>


                                    <div className='col-md-4'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'Description']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing Description',
                                                },
                                            ]}
                                        >
                                            <TextArea  maxLength={400} placeholder='Description' />
                                        </Form.Item>
                                        {/* <small className='words'>remaining words{maxtext - text5}</small> */}
                                    </div>
                                    <div className='col-md-2'>
                                        <Form.Item
                                            {...restField}
                                            name={[name, 'YearRange']}
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Missing YearRange',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Year Range" />
                                        </Form.Item>
                                    </div>
                                    <div className='col-md-2'>
                                        <MinusCircleOutlined style={{ size: 30, color: 'tomato' }} onClick={() => remove(name)} />
                                    </div>
                                </>
                            ))}</div>
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add Projects
                            </Button>
                        </Form.Item>
                    </>
                )}

            </Form.List>
        </div>
    )
}

export default ExperienceProjects